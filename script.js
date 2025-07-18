document.addEventListener('DOMContentLoaded', () => {
    const curriculumSection = document.getElementById('curriculum-section');
    const overallProgressBar = document.getElementById('overall-progress-bar');
    const overallProgressText = document.getElementById('overall-progress-text');
    const completedCoursesCount = document.getElementById('completed-courses-count');
    const totalCoursesCount = document.getElementById('total-courses-count');
    const nextCoursesList = document.getElementById('next-courses-list');
    const themeSwitcher = document.querySelector('.theme-switcher');

    let totalCourses = 0;
    let completedCourses = 0;
    let currentSemesterIndex = 0; // Track the current semester for next course recommendations

    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        if (savedTheme === 'dark-mode') {
            themeSwitcher.querySelector('.icon').textContent = '☀️';
        } else {
            themeSwitcher.querySelector('.icon').textContent = '🌙';
        }
    } else {
        // Default to light mode if no preference is found
        document.body.classList.add('light-mode');
        themeSwitcher.querySelector('.icon').textContent = '🌙';
    }

    // Function to calculate and update progress
    const updateProgress = () => {
        completedCourses = 0;
        const allCourseCheckboxes = document.querySelectorAll('.course-checkbox');
        totalCourses = allCourseCheckboxes.length;

        allCourseCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                completedCourses++;
            }
        });

        const progressPercentage = totalCourses > 0 ? (completedCourses / totalCourses) * 100 : 0;
        overallProgressBar.style.width = `${progressPercentage}%`;
        overallProgressText.textContent = `${progressPercentage.toFixed(1)}%`;
        completedCoursesCount.textContent = completedCourses;
        totalCoursesCount.textContent = totalCourses;

        localStorage.setItem('completedCourses', JSON.stringify(getCompletedCoursesState()));
    };

    // Function to get the state of completed courses
    const getCompletedCoursesState = () => {
        const state = {};
        document.querySelectorAll('.course-checkbox').forEach(checkbox => {
            state[checkbox.id] = checkbox.checked;
        });
        return state;
    };

    // Function to apply the state of completed courses
    const applyCompletedCoursesState = (state) => {
        document.querySelectorAll('.course-checkbox').forEach(checkbox => {
            if (state[checkbox.id]) {
                checkbox.checked = true;
                checkbox.closest('.course-item').classList.add('completed');
            }
        });
        updateProgress();
    };

    // Function to render the curriculum
    const renderCurriculum = () => {
        curriculumSection.innerHTML = ''; // Clear previous content

        let semesterCounter = 0;
        for (const semester in curriculumData) {
            const semesterDiv = document.createElement('div');
            semesterDiv.classList.add('semester');

            const semesterHeader = document.createElement('h2');
            semesterHeader.classList.add('semester-header');
            semesterHeader.innerHTML = `${semester} <span class="toggle-icon" data-tooltip="Colapsar/Expandir">▼</span>`;
            semesterDiv.appendChild(semesterHeader);

            const courseList = document.createElement('ul');
            courseList.classList.add('course-list');
            courseList.style.display = 'none'; // Initially collapsed

            curriculumData[semester].forEach((course, index) => {
                const courseItem = document.createElement('li');
                courseItem.classList.add('course-item');

                const checkboxId = `course-${semester.replace(/\s|\(|\)/g, '-')}-${index}`; // Adjusted regex for semester names like "Semestres 11 y 12 (Contempla)"
                courseItem.innerHTML = `
                    <input type="checkbox" id="${checkboxId}" class="course-checkbox">
                    <label for="${checkboxId}">${course}</label>
                `;
                courseList.appendChild(courseItem);
            });
            semesterDiv.appendChild(courseList);
            curriculumSection.appendChild(semesterDiv);
            semesterCounter++;
        }

        // Add event listeners for toggling semesters
        document.querySelectorAll('.semester-header').forEach(header => {
            header.addEventListener('click', (event) => {
                const courseList = event.currentTarget.nextElementSibling;
                const toggleIcon = event.currentTarget.querySelector('.toggle-icon');
                if (courseList.style.display === 'none') {
                    courseList.style.display = 'block';
                    toggleIcon.textContent = '▲';
                } else {
                    courseList.style.display = 'none';
                    toggleIcon.textContent = '▼';
                }
            });
        });

        // Add event listeners for checkboxes
        document.querySelectorAll('.course-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', (event) => {
                if (event.target.checked) {
                    event.target.closest('.course-item').classList.add('completed');
                } else {
                    event.target.closest('.course-item').classList.remove('completed');
                }
                updateProgress();
                updateNextCourses();
            });
        });

        // Load saved state after rendering
        const savedCompletedCourses = JSON.parse(localStorage.getItem('completedCourses'));
        if (savedCompletedCourses) {
            applyCompletedCoursesState(savedCompletedCourses);
        } else {
            updateProgress(); // Initial progress calculation if no saved state
        }
        updateNextCourses(); // Initial recommendation
    };

    // Function to update next course recommendations
    const updateNextCourses = () => {
        nextCoursesList.innerHTML = '';
        let recommendedCount = 0;
        let foundCurrentSemester = false;
        let currentSemesterKey = '';

        // Find the first semester with uncompleted courses
        for (const semesterKey in curriculumData) {
            const coursesInSemester = curriculumData[semesterKey];
            const hasUncompleted = coursesInSemester.some((course, index) => {
                const checkboxId = `course-${semesterKey.replace(/\s|\(|\)/g, '-')}-${index}`;
                return !document.getElementById(checkboxId)?.checked;
            });

            if (hasUncompleted && !foundCurrentSemester) {
                currentSemesterKey = semesterKey;
                foundCurrentSemester = true;
                break;
            }
        }

        if (!foundCurrentSemester) {
            nextCoursesList.innerHTML = '<p>¡Felicitaciones! Has completado todos los ramos. 🎉</p>';
            return;
        }

        const nextCourses = [];
        let tempSemesterIndex = Object.keys(curriculumData).indexOf(currentSemesterKey);

        while (recommendedCount < 6 && tempSemesterIndex < Object.keys(curriculumData).length) {
            const semesterKey = Object.keys(curriculumData)[tempSemesterIndex];
            const courses = curriculumData[semesterKey];

            for (let i = 0; i < courses.length; i++) {
                const courseName = courses[i];
                const checkboxId = `course-${semesterKey.replace(/\s|\(|\)/g, '-')}-${i}`;
                const checkbox = document.getElementById(checkboxId);

                if (checkbox && !checkbox.checked) {
                    nextCourses.push(`${courseName} (${semesterKey})`);
                    recommendedCount++;
                    if (recommendedCount >= 6) break;
                }
            }
            tempSemesterIndex++;
        }

        if (nextCourses.length > 0) {
            const ul = document.createElement('ul');
            nextCourses.forEach(course => {
                const li = document.createElement('li');
                li.textContent = course;
                ul.appendChild(li);
            });
            nextCoursesList.appendChild(ul);
        } else {
            nextCoursesList.innerHTML = '<p>No hay ramos recomendados en este momento.</p>';
        }
    };

    // Theme switcher functionality
    themeSwitcher.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');

        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
            themeSwitcher.querySelector('.icon').textContent = '☀️';
        } else {
            localStorage.setItem('theme', 'light-mode');
            themeSwitcher.querySelector('.icon').textContent = '🌙';
        }
    });

    renderCurriculum();
});
