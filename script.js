// script.js

document.addEventListener('DOMContentLoaded', () => {
    const LOCAL_STORAGE_KEY = 'mallaProgress';
    const THEME_STORAGE_KEY = 'mallaTheme'; // Nueva clave para el tema

    let allCourses;

    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const semestersContainer = document.getElementById('semestersContainer');
    const recommendedCoursesDiv = document.getElementById('recommendedCourses');
    const refreshRecommendationsBtn = document.getElementById('refreshRecommendations');
    const averageGradeText = document.getElementById('averageGradeText');
    const themeToggleButton = document.getElementById('themeToggleButton'); // Nuevo botón

    // Elementos del Modal
    const courseModal = document.getElementById('courseModal');
    const closeModalButtons = document.querySelectorAll('.modal-button.close, .close-button');
    const modalCourseName = document.getElementById('modalCourseName');
    const modalCourseSemester = document.getElementById('modalCourseSemester');
    const modalCourseArea = document.getElementById('modalCourseArea');
    const modalCourseDescription = document.getElementById('modalCourseDescription');
    const modalCoursePrerequisites = document.getElementById('modalCoursePrerequisites');
    const markAsApprovedBtn = document.getElementById('markAsApprovedBtn');

    const semesterCoursesContainers = {};
    for (let i = 1; i <= 14; i++) { // Mantener 14 semestres para Medicina
        const semesterDiv = document.createElement('div');
        semesterDiv.classList.add('semester');
        semesterDiv.innerHTML = `<h3>Semestre ${i}</h3>`;
        semestersContainer.appendChild(semesterDiv);

        const coursesDiv = document.createElement('div');
        coursesDiv.classList.add('courses-container');
        semesterDiv.appendChild(coursesDiv);
        semesterCoursesContainers[i] = coursesDiv;
    }

    // --- Funciones de Guardado y Carga ---
    function saveProgress() {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allCourses));
    }

    function loadProgress() {
        const savedProgress = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (savedProgress) {
            allCourses = JSON.parse(savedProgress);
        } else {
            allCourses = coursesData.map(course => ({ ...course }));
        }
    }

    // --- Funciones de Tema (Modo Noche/Día) ---
    function loadTheme() {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }

    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem(THEME_STORAGE_KEY, 'dark');
            themeToggleButton.textContent = '☀️'; // Cambiar a sol en modo oscuro
            themeToggleButton.title = 'Cambiar a modo claro';
        } else {
            localStorage.setItem(THEME_STORAGE_KEY, 'light');
            themeToggleButton.textContent = '🌙'; // Cambiar a luna en modo claro
            themeToggleButton.title = 'Cambiar a modo oscuro';
        }
    }
    // Asignar evento al botón de cambio de tema
    themeToggleButton.addEventListener('click', toggleTheme);

    // --- Lógica de la Malla Curricular ---
    function isCourseBlocked(course) {
        if (!course.prerequisites || course.prerequisites.length === 0) {
            return false;
        }
        return course.prerequisites.some(prereqId => {
            const prereqCourse = allCourses.find(c => c.id === prereqId);
            return prereqCourse && !prereqCourse.approved;
        });
    }

    function renderMalla() {
        for (const sem in semesterCoursesContainers) {
            semesterCoursesContainers[sem].innerHTML = '';
        }

        allCourses.forEach(course => {
            const courseBox = document.createElement('div');
            courseBox.classList.add('course-box');
            courseBox.setAttribute('data-id', course.id);
            courseBox.textContent = course.name;

            if (course.approved && course.grade !== null) {
                courseBox.textContent = `${course.name} (${course.grade.toFixed(1)})`;
            } else {
                courseBox.textContent = course.name;
            }

            courseBox.classList.add(course.area);

            if (course.approved) {
                courseBox.classList.add('approved');
            } else if (isCourseBlocked(course)) {
                courseBox.classList.add('blocked');
                courseBox.textContent += ' 🔒';
            }

            courseBox.addEventListener('click', () => {
                const clickedCourse = allCourses.find(c => c.id === course.id);

                if (clickedCourse.approved) {
                    clickedCourse.approved = false;
                    clickedCourse.grade = null;
                    renderMalla();
                    updateProgressBar();
                    updateAverageGrade();
                    updateRecommendedCourses();
                    saveProgress();
                } else if (isCourseBlocked(clickedCourse)) {
                    // No hacer nada si está bloqueado
                } else {
                    openCourseModal(clickedCourse);
                }
            });

            if (semesterCoursesContainers[course.semester]) {
                semesterCoursesContainers[course.semester].appendChild(courseBox);
            }
        });
    }

    // --- Funciones del Modal ---
    let currentCourseInModal = null;

    function openCourseModal(course) {
        currentCourseInModal = course;
        modalCourseName.textContent = course.name;
        modalCourseSemester.textContent = course.semester;
        modalCourseArea.textContent = course.area;
        modalCourseDescription.textContent = course.description || "No hay descripción disponible.";

        if (course.prerequisites && course.prerequisites.length > 0) {
            const prereqNames = course.prerequisites.map(prereqId => {
                const prereqCourse = allCourses.find(c => c.id === prereqId);
                return prereqCourse ? prereqCourse.name : `ID ${prereqId} (Desconocido)`;
            }).join(', ');
            modalCoursePrerequisites.textContent = prereqNames;
        } else {
            modalCoursePrerequisites.textContent = "Ninguno";
        }

        markAsApprovedBtn.onclick = () => {
            let gradeInput = prompt(`Ingresa la nota para "${currentCourseInModal.name}" (1.0 a 7.0):`);
            let grade = parseFloat(gradeInput);

            if (!isNaN(grade) && grade >= 1.0 && grade <= 7.0) {
                currentCourseInModal.approved = true;
                currentCourseInModal.grade = grade;
                closeCourseModal();
                renderMalla();
                updateProgressBar();
                updateAverageGrade();
                updateRecommendedCourses();
                saveProgress();
            } else if (gradeInput !== null) {
                alert("Nota inválida. Por favor, ingresa un número entre 1.0 y 7.0.");
            }
        };

        courseModal.style.display = 'flex';
    }

    function closeCourseModal() {
        courseModal.style.display = 'none';
        currentCourseInModal = null;
    }

    closeModalButtons.forEach(button => {
        button.addEventListener('click', closeCourseModal);
    });

    window.addEventListener('click', (event) => {
        if (event.target === courseModal) {
            closeCourseModal();
        }
    });

    // --- Funciones de Actualización de Datos y UI ---
    function updateProgressBar() {
        const totalCourses = allCourses.length;
        const approvedCourses = allCourses.filter(course => course.approved).length;
        const percentage = (approvedCourses / totalCourses) * 100;

        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${percentage.toFixed(0)}%`;
    }

    function updateAverageGrade() {
        const gradedApprovedCourses = allCourses.filter(course => course.approved && course.grade !== null);

        let totalGrade = 0;
        gradedApprovedCourses.forEach(course => {
            totalGrade += course.grade;
        });

        if (gradedApprovedCourses.length > 0) {
            const average = totalGrade / gradedApprovedCourses.length;
            averageGradeText.textContent = `Promedio de ramos aprobados: ${average.toFixed(2)}`;
        } else {
            averageGradeText.textContent = 'Promedio de ramos aprobados: N/A';
        }
    }

    function updateRecommendedCourses() {
        recommendedCoursesDiv.innerHTML = '';
        const availableCourses = allCourses.filter(course => !course.approved && !isCourseBlocked(course));

        const sortedRecommendations = availableCourses.sort((a, b) => {
            if (a.semester !== b.semester) {
                return a.semester - b.semester;
            }

            const getImpact = (courseId) => {
                let impact = 0;
                allCourses.forEach(c => {
                    if (c.prerequisites && c.prerequisites.includes(courseId)) {
                        impact++;
                    }
                });
                return impact;
            };

            const impactA = getImpact(a.id);
            const impactB = getImpact(b.id);

            return impactB - impactA;
        });

        const recommendationsToShow = sortedRecommendations.slice(0, 6);

        if (recommendationsToShow.length === 0) {
            recommendedCoursesDiv.textContent = 'No hay ramos disponibles para recomendar en este momento.';
        } else {
            recommendationsToShow.forEach(course => {
                const courseBox = document.createElement('div');
                courseBox.classList.add('course-box');
                courseBox.textContent = course.name;
                courseBox.classList.add(course.area);
                recommendedCoursesDiv.appendChild(courseBox);
            });
        }
    }

    refreshRecommendationsBtn.addEventListener('click', updateRecommendedCourses);

    // --- Llamadas iniciales ---
    loadTheme(); // Cargar el tema al inicio
    // Asegurarse de que el icono del botón de tema se actualice correctamente al cargar la página
    if (document.body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = '☀️';
        themeToggleButton.title = 'Cambiar a modo claro';
    } else {
        themeToggleButton.textContent = '🌙';
        themeToggleButton.title = 'Cambiar a modo oscuro';
    }
    loadProgress();
    renderMalla();
    updateProgressBar();
    updateAverageGrade();
    updateRecommendedCourses();
});
