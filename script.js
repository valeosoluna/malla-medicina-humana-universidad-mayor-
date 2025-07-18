document.addEventListener('DOMContentLoaded', () => {
    const courseGrid = document.getElementById('course-grid');
    const licenciateTitle = document.getElementById('licenciate-title');
    const professionalTitle = document.getElementById('professional-title');
    const programNotes = document.getElementById('program-notes');
    const themeToggle = document.getElementById('checkbox');

    // Load program information
    licenciateTitle.textContent = programInfo.licenciate;
    professionalTitle.textContent = programInfo.professionalTitle;
    programInfo.notes.forEach(note => {
        const li = document.createElement('li');
        li.textContent = note;
        programNotes.appendChild(li);
    });

    // Render courses
    courseData.forEach(cycleData => {
        const cycleSection = document.createElement('section');
        cycleSection.classList.add('cycle-section');

        const cycleTitle = document.createElement('h2');
        cycleTitle.textContent = cycleData.cycle;
        cycleSection.appendChild(cycleTitle);

        cycleData.semesters.forEach(semesterData => {
            const semesterDiv = document.createElement('div');
            semesterDiv.classList.add('semester');

            const semesterHeader = document.createElement('h3');
            semesterHeader.classList.add('semester-header');
            semesterHeader.innerHTML = `${semesterData.semester} <span class="toggle-icon">+</span>`;
            semesterDiv.appendChild(semesterHeader);

            const courseList = document.createElement('ul');
            courseList.classList.add('course-list');
            courseList.style.display = 'none'; // Initially hidden

            semesterData.courses.forEach(course => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <input type="checkbox" id="${course.name.replace(/\s/g, '-')}-${semesterData.semester.replace(/\s/g, '-')}" class="course-checkbox">
                    <label for="${course.name.replace(/\s/g, '-')}-${semesterData.semester.replace(/\s/g, '-')}" class="course-name" title="Click to mark as completed">${course.name}</label>
                    <span class="course-area" title="Área de Formación">${course.area}</span>
                `;
                courseList.appendChild(li);
            });

            semesterDiv.appendChild(courseList);
            cycleSection.appendChild(semesterDiv);
        });
        courseGrid.appendChild(cycleSection);
    });

    // Add event listeners for expand/collapse
    document.querySelectorAll('.semester-header').forEach(header => {
        header.addEventListener('click', (event) => {
            const courseList = header.nextElementSibling;
            const toggleIcon = header.querySelector('.toggle-icon');
            if (courseList.style.display === 'none') {
                courseList.style.display = 'block';
                toggleIcon.textContent = '-';
            } else {
                courseList.style.display = 'none';
                toggleIcon.textContent = '+';
            }
        });
    });

    // Add event listeners for course completion (strikethrough)
    document.querySelectorAll('.course-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', (event) => {
            const courseNameLabel = event.target.nextElementSibling;
            if (event.target.checked) {
                courseNameLabel.classList.add('completed');
            } else {
                courseNameLabel.classList.remove('completed');
            }
        });
    });

    // Theme toggle functionality
    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        // Save user preference (optional, but good for persistence)
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Apply saved theme on load
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    }
});
