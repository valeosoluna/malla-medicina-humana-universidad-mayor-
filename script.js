// script.js

document.addEventListener('DOMContentLoaded', () => {
    const curriculumContainer = document.getElementById('curriculum-container');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const themeToggle = document.getElementById('theme-toggle');
    const nextCoursesList = document.getElementById('next-courses-list');
    const licenciadoDegree = document.getElementById('licenciado-degree');
    const medicoCirujanoDegree = document.getElementById('medico-cirujano-degree');

    let completedCourses = JSON.parse(localStorage.getItem('completedCourses')) || {};
    let currentSemesterIndex = 0; // Tracks the "current" semester for next course recommendations

    // --- Theme Toggle ---
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        themeToggle.textContent = savedTheme === 'dark-mode' ? '☀️' : '🌙';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
            themeToggle.textContent = '☀️';
        } else {
            localStorage.setItem('theme', 'light-mode');
            themeToggle.textContent = '🌙';
        }
    });

    // --- Render Curriculum ---
    function renderCurriculum() {
        curriculumContainer.innerHTML = '';
        let semesterCounter = 0;
        for (const cycle in curriculumData) {
            const cycleSection = document.createElement('section');
            cycleSection.classList.add('cycle-section');

            const cycleTitle = document.createElement('h2');
            cycleTitle.classList.add('cycle-title');
            cycleTitle.textContent = cycle;
            cycleSection.appendChild(cycleTitle);

            const semesterGrid = document.createElement('div');
            semesterGrid.classList.add('semester-grid');

            for (const semester of semesterOrder) { // Iterate using semesterOrder to maintain sequence
                if (curriculumData[cycle][semester]) { // Only process if the semester exists in the current cycle
                    semesterCounter++;
                    const semesterCard = document.createElement('div');
                    semesterCard.classList.add('semester-card');

                    const semesterTitle = document.createElement('h3');
                    semesterTitle.textContent = semester;
                    semesterCard.appendChild(semesterTitle);

                    const courseList = document.createElement('ul');
                    courseList.classList.add('course-list');

                    curriculumData[cycle][semester].forEach(course => {
                        const courseItem = document.createElement('li');
                        courseItem.classList.add('course-item');
                        courseItem.dataset.id = course.id;
                        courseItem.dataset.semester = semester; // Store semester for later use

                        if (completedCourses[course.id]) {
                            courseItem.classList.add('completed');
                        }

                        const courseNameSpan = document.createElement('span');
                        courseNameSpan.classList.add('course-name');
                        courseNameSpan.textContent = course.name;
                        courseItem.appendChild(courseNameSpan);

                        // Removed area badge creation as 'area' property is no longer in data.js
                        // If you re-introduce 'area' property, uncomment this section:
                        /*
                        if (course.area) {
                            const courseAreaSpan = document.createElement('span');
                            const areaClassName = course.area.replace(/[^a-zA-Z0-9]/g, '.');
                            courseAreaSpan.classList.add('course-area', areaClassName);
                            courseAreaSpan.textContent = course.area.replace('AREA FORMACION ', '');
                            courseItem.appendChild(courseAreaSpan);
                        }
                        */

                        courseItem.addEventListener('click', () => toggleCourseCompletion(course.id, semesterCounter));
                        courseList.appendChild(courseItem);
                    });
                    semesterCard.appendChild(courseList);
                    semesterGrid.appendChild(semesterCard);
                }
            }
            cycleSection.appendChild(semesterGrid);
            curriculumContainer.appendChild(cycleSection);
        }
        updateProgressBar();
        updateDegreeStatus();
        updateNextCourses();
    }

    // --- Course Completion Logic ---
    function toggleCourseCompletion(courseId, semesterNumber) {
        if (completedCourses[courseId]) {
            delete completedCourses[courseId];
        } else {
            completedCourses[courseId] = true;
        }
        localStorage.setItem('completedCourses', JSON.stringify(completedCourses));
        renderCurriculum(); // Re-render to update classes and progress
    }

    // --- Update Progress Bar ---
    function updateProgressBar() {
        let totalCourses = 0;
        let coursesCompletedCount = 0;

        for (const cycle in curriculumData) {
            for (const semester in curriculumData[cycle]) {
                totalCourses += curriculumData[cycle][semester].length;
                curriculumData[cycle][semester].forEach(course => {
                    if (completedCourses[course.id]) {
                        coursesCompletedCount++;
                    }
                });
            }
        }

        const progressPercentage = totalCourses === 0 ? 0 : (coursesCompletedCount / totalCourses) * 100;
        progressBar.style.width = `${progressPercentage.toFixed(2)}%`;
        progressText.textContent = `${progressPercentage.toFixed(0)}%`; // Display without decimals

        // Determine current semester based on completed courses for recommendations
        currentSemesterIndex = 0;
        let allSemestersCompletedCount = 0;
        for (let i = 0; i < semesterOrder.length; i++) {
            const semesterName = semesterOrder[i];
            let semesterCourses = [];
            // Find semester courses regardless of cycle
            for (const cycle in curriculumData) {
                if (curriculumData[cycle][semesterName]) {
                    semesterCourses = curriculumData[cycle][semesterName];
                    break;
                }
            }

            if (semesterCourses.length > 0 && semesterCourses.every(course => completedCourses[course.id])) {
                allSemestersCompletedCount++;
            } else {
                break; // Stop at the first non-fully completed semester
            }
        }
        currentSemesterIndex = allSemestersCompletedCount;
    }

    // --- Update Degree Status ---
    function updateDegreeStatus() {
        // This logic assumes "Ciclo 1" directly maps to "Licenciado" for simplicity,
        // as the new PDF does not specify degree requirements.
        const totalCoursesCiclo1 = Object.values(curriculumData["CICLO 1"]).flat().length;
        let completedCiclo1 = 0;
        Object.values(curriculumData["CICLO 1"]).flat().forEach(course => {
            if (completedCourses[course.id]) {
                completedCiclo1++;
            }
        });

        if (completedCiclo1 === totalCoursesCiclo1) {
            licenciadoDegree.textContent = `${degreeTitles.licenciado} (Obtenido)`;
            licenciadoDegree.classList.add('achieved');
        } else {
            licenciadoDegree.textContent = `${degreeTitles.licenciado} (${completedCiclo1}/${totalCoursesCiclo1} ramos completados en Ciclo 1)`;
            licenciadoDegree.classList.remove('achieved');
        }

        // For Médico/a Cirujano/a, assume all courses must be completed
        const totalCoursesOverall = Object.values(curriculumData).map(cycle => Object.values(cycle)).flat(2).length;
        let completedOverall = 0;
        Object.values(curriculumData).map(cycle => Object.values(cycle)).flat(2).forEach(course => {
            if (completedCourses[course.id]) {
                completedOverall++;
            }
        });

        if (completedOverall === totalCoursesOverall) {
            medicoCirujanoDegree.textContent = `${degreeTitles.medicoCirujano} (Obtenido)`;
            medicoCirujanoDegree.classList.add('achieved');
        } else {
            medicoCirujanoDegree.textContent = `${degreeTitles.medicoCirujano} (${completedOverall}/${totalCoursesOverall} ramos completados en total)`;
            medicoCirujanoDegree.classList.remove('achieved');
        }
    }


    // --- Update Next Courses ---
    function updateNextCourses() {
        nextCoursesList.innerHTML = '';
        const recommendedCourses = [];
        let coursesFound = 0;

        // Start checking from the semester *after* the current completed block
        for (let i = currentSemesterIndex; i < semesterOrder.length; i++) {
            const semesterName = semesterOrder[i];
            let semesterCourses = [];

            // Find courses for the current semester name across cycles
            for (const cycleKey in curriculumData) {
                if (curriculumData[cycleKey][semesterName]) {
                    semesterCourses = curriculumData[cycleKey][semesterName];
                    break;
                }
            }

            if (semesterCourses.length > 0) {
                for (const course of semesterCourses) {
                    if (!completedCourses[course.id]) {
                        recommendedCourses.push(course);
                        coursesFound++;
                        if (coursesFound >= 6) { // Max 6 recommendations
                            break;
                        }
                    }
                }
            }
            if (coursesFound >= 6) {
                break;
            }
        }

        if (recommendedCourses.length > 0) {
            recommendedCourses.forEach(course => {
                const courseItem = document.createElement('div');
                courseItem.classList.add('next-course-item');
                courseItem.textContent = course.name;
                nextCoursesList.appendChild(courseItem);
            });
        } else if (Object.keys(completedCourses).length === Object.values(curriculumData).map(c => Object.values(c)).flat(2).length) {
            nextCoursesList.innerHTML = '<p>¡Felicitaciones! Has completado todos los ramos.</p>';
        } else {
            nextCoursesList.innerHTML = '<p>No hay ramos nuevos para recomendar. Completa los ramos actuales para ver más.</p>';
        }
    }


    // Initial render
    renderCurriculum();
});
