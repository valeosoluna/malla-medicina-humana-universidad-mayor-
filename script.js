document.addEventListener('DOMContentLoaded', () => {
    const courseListDiv = document.getElementById('course-list');
    const progressBarFill = document.getElementById('progress-fill');
    const progressPercentage = document.getElementById('progress-percentage');
    const nextCoursesList = document.getElementById('next-courses-list');

    let completedCourses = JSON.parse(localStorage.getItem('completedCourses')) || [];
    let selectedNextCourses = JSON.parse(localStorage.getItem('selectedNextCourses')) || [];

    const groupCoursesBySemester = (courses) => {
        return courses.reduce((acc, course) => {
            if (!acc[course.semester]) {
                acc[course.semester] = [];
            }
            acc[course.semester].push(course);
            return acc;
        }, {});
    };

    const renderCourses = () => {
        courseListDiv.innerHTML = '';
        const groupedCourses = groupCoursesBySemester(courses);
        let currentSemester = 0;

        // Find the lowest semester that has not been fully completed
        for (const semesterNum in groupedCourses) {
            const semesterCourses = groupedCourses[semesterNum];
            const allCompletedInSemester = semesterCourses.every(course =>
                completedCourses.some(c => c.name === course.name && c.semester === course.semester)
            );
            if (!allCompletedInSemester) {
                currentSemester = parseInt(semesterNum);
                break;
            }
        }
        if (currentSemester === 0) { // All courses completed
            currentSemester = Math.max(...Object.keys(groupedCourses).map(Number));
        }


        for (const semesterNum in groupedCourses) {
            const semesterCourses = groupedCourses[semesterNum];
            const isCurrentSemester = parseInt(semesterNum) === currentSemester;

            const semesterContainer = document.createElement('div');
            semesterContainer.classList.add('semester-container');

            const semesterHeader = document.createElement('h2');
            semesterHeader.textContent = `Semestre ${semesterNum}`;
            semesterHeader.classList.add('semester-header');
            semesterHeader.addEventListener('click', () => {
                semesterContainer.classList.toggle('collapsed');
            });
            semesterContainer.appendChild(semesterHeader);

            const courseGrid = document.createElement('div');
            courseGrid.classList.add('course-grid');
            semesterContainer.appendChild(courseGrid);

            semesterCourses.forEach(course => {
                const courseItem = document.createElement('div');
                courseItem.classList.add('course-item');
                if (completedCourses.some(c => c.name === course.name && c.semester === course.semester)) {
                    courseItem.classList.add('completed');
                }

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = completedCourses.some(c => c.name === course.name && c.semester === course.semester);
                checkbox.addEventListener('change', () => {
                    toggleCourseCompletion(course);
                });
                courseItem.appendChild(checkbox);

                const courseName = document.createElement('span');
                courseName.textContent = course.name;
                courseItem.appendChild(courseName);

                courseGrid.appendChild(courseItem);
            });

            courseListDiv.appendChild(semesterContainer);

            if (!isCurrentSemester) {
                semesterContainer.classList.add('collapsed');
            }
        }
        updateProgressBar();
        renderNextCourses();
    };

    const toggleCourseCompletion = (course) => {
        const index = completedCourses.findIndex(c => c.name === course.name && c.semester === course.semester);
        if (index > -1) {
            completedCourses.splice(index, 1);
        } else {
            completedCourses.push(course);
        }
        localStorage.setItem('completedCourses', JSON.stringify(completedCourses));
        renderCourses();
    };

    const updateProgressBar = () => {
        const totalCourses = courses.length;
        const completedCount = completedCourses.length;
        const percentage = totalCourses > 0 ? (completedCount / totalCourses) * 100 : 0;
        progressBarFill.style.width = `${percentage}%`;
        progressPercentage.textContent = `${percentage.toFixed(2)}%`;
    };

    const renderNextCourses = () => {
        nextCoursesList.innerHTML = '';
        const completedCourseNames = new Set(completedCourses.map(c => c.name));
        const allSemesters = Array.from(new Set(courses.map(c => c.semester))).sort((a, b) => a - b);

        let nextAvailableSemester = 1;
        for (const semester of allSemesters) {
            const semesterCourses = courses.filter(c => c.semester === semester);
            const allSemesterCoursesCompleted = semesterCourses.every(course =>
                completedCourseNames.has(course.name)
            );
            if (!allSemesterCoursesCompleted) {
                nextAvailableSemester = semester;
                break;
            }
            nextAvailableSemester = semester + 1; // If current semester is complete, look at the next
        }
        // Ensure nextAvailableSemester does not exceed the maximum semester in the data
        const maxSemester = Math.max(...allSemesters);
        if (nextAvailableSemester > maxSemester) {
            nextAvailableSemester = maxSemester; // Or handle as all courses completed
        }


        const potentialNextCourses = courses.filter(course =>
            course.semester === nextAvailableSemester && !completedCourseNames.has(course.name)
        ).slice(0, 6); // Limit to a maximum of 6

        if (potentialNextCourses.length === 0 && completedCourses.length === courses.length) {
            nextCoursesList.innerHTML = '<p>¡Todos los ramos completados! ¡Felicidades!</p>';
            return;
        } else if (potentialNextCourses.length === 0) {
             nextCoursesList.innerHTML = '<p>No hay ramos disponibles para el próximo semestre. Revisa si has completado todos los anteriores.</p>';
             return;
        }


        potentialNextCourses.forEach(course => {
            const courseItem = document.createElement('div');
            courseItem.classList.add('next-course-item');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = selectedNextCourses.some(c => c.name === course.name && c.semester === course.semester);
            checkbox.addEventListener('change', () => {
                toggleNextCourseSelection(course);
            });
            courseItem.appendChild(checkbox);

            const courseName = document.createElement('span');
            courseName.textContent = course.name;
            courseItem.appendChild(courseName);

            nextCoursesList.appendChild(courseItem);
        });
    };

    const toggleNextCourseSelection = (course) => {
        const index = selectedNextCourses.findIndex(c => c.name === course.name && c.semester === course.semester);
        if (index > -1) {
            selectedNextCourses.splice(index, 1);
        } else {
            if (selectedNextCourses.length < 6) { // Limit selection to 6
                selectedNextCourses.push(course);
            } else {
                alert('Solo puedes seleccionar un máximo de 6 ramos para el próximo semestre.');
                return; // Prevent checking the box if limit is reached
            }
        }
        localStorage.setItem('selectedNextCourses', JSON.stringify(selectedNextCourses));
        renderNextCourses(); // Re-render to reflect selection
    };


    renderCourses();
});
