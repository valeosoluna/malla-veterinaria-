document.addEventListener('DOMContentLoaded', () => {
    const curriculumGrid = document.getElementById('curriculum-grid');
    const progressPercentageSpan = document.getElementById('progress-percentage');
    const progressFill = document.getElementById('progress-fill');

    // Define your courses based on the PDF.
    // I've assigned categories based on typical university structures.
    // You can adjust 'category' to match the colors in your image's legend.
    const courses = [
        // Year 1 (Cycles 1 & 2)
        { id: 1, name: 'Introducción a las Ciencias Veterinarias', level: 1, semester: 1, cycle: 1, year: 1, category: 'fundamentos' },
        { id: 2, name: 'Fundamentos de la Química', level: 1, semester: 1, cycle: 1, year: 1, category: 'fundamentos' },
        { id: 3, name: 'Biología Celular y Molecular', level: 1, semester: 1, cycle: 1, year: 1, category: 'fundamentos' },
        { id: 4, name: 'Matemática', level: 1, semester: 1, cycle: 1, year: 1, category: 'humanidades' },
        { id: 5, name: 'Zoología', level: 1, semester: 1, cycle: 1, year: 1, category: 'fundamentos' },
        { id: 6, name: 'Fundamentos de la Física', level: 1, semester: 1, cycle: 1, year: 1, category: 'fundamentos' },

        { id: 7, name: 'Anatomía Animal I', level: 2, semester: 2, cycle: 2, year: 1, category: 'fundamentos' },
        { id: 8, name: 'Praderas y Especies Forrajeras', level: 2, semester: 2, cycle: 2, year: 1, category: 'fundamentos' },
        { id: 9, name: 'Fundamentos de Bioquímica', level: 2, semester: 2, cycle: 2, year: 1, category: 'fundamentos' },
        { id: 10, name: 'Histoembriología Veterinaria', level: 2, semester: 2, cycle: 2, year: 1, category: 'fundamentos' },
        { id: 11, name: 'Ecología', level: 2, semester: 2, cycle: 2, year: 1, category: 'fundamentos' },
        { id: 12, name: 'Electivo 1', level: 2, semester: 2, cycle: 2, year: 1, category: 'electivo' },

        // Year 2 (Cycles 3 & 4)
        { id: 13, name: 'Anatomía Animal II', level: 3, semester: 3, cycle: 3, year: 2, category: 'fundamentos' },
        { id: 14, name: 'Nutrición y Alimentación Animal', level: 3, semester: 3, cycle: 3, year: 2, category: 'fundamentos' },
        { id: 15, name: 'Fisiología Veterinaria', level: 3, semester: 3, cycle: 3, year: 2, category: 'fundamentos' },
        { id: 16, name: 'Práctica Inicial', level: 3, semester: 3, cycle: 3, year: 2, category: 'practica' },
        { id: 17, name: 'Inmunología General', level: 3, semester: 3, cycle: 3, year: 2, category: 'fundamentos' },
        { id: 18, name: 'Bioestadística', level: 3, semester: 3, cycle: 3, year: 2, category: 'investigacion' },
        { id: 19, name: 'Electivo 2', level: 3, semester: 3, cycle: 3, year: 2, category: 'electivo' },

        { id: 20, name: 'Etología y Bienestar Animal', level: 4, semester: 4, cycle: 4, year: 2, category: 'fundamentos' },
        { id: 21, name: 'Histopatología', level: 4, semester: 4, cycle: 4, year: 2, category: 'fundamentos' },
        { id: 22, name: 'Microbiología Veterinaria', level: 4, semester: 4, cycle: 4, year: 2, category: 'fundamentos' },
        { id: 23, name: 'Conservación de Fauna Silvestre', level: 4, semester: 4, cycle: 4, year: 2, category: 'fundamentos' },
        { id: 24, name: 'Métodos de Investigación en Salud', level: 4, semester: 4, cycle: 4, year: 2, category: 'investigacion' },
        { id: 25, name: 'Electivo 3', level: 4, semester: 4, cycle: 4, year: 2, category: 'electivo' },

        // Year 3 (Cycles 5 & 6)
        { id: 26, name: 'Genética en Ciencias Veterinarias', level: 5, semester: 5, cycle: 5, year: 3, category: 'fundamentos' },
        { id: 27, name: 'Epidemiología Veterinaria', level: 5, semester: 5, cycle: 5, year: 3, category: 'politica-gestion' },
        { id: 28, name: 'Fisiopatología Veterinaria', level: 5, semester: 5, cycle: 5, year: 3, category: 'fundamentos' },
        { id: 29, name: 'Gestión Ambiental y Desarrollo Sustent', level: 5, semester: 5, cycle: 5, year: 3, category: 'politica-gestion' },
        { id: 30, name: 'Gestión Contable y Financiera', level: 5, semester: 5, cycle: 5, year: 3, category: 'politica-gestion' },
        { id: 31, name: 'Electivo 4', level: 5, semester: 5, cycle: 5, year: 3, category: 'electivo' },

        { id: 32, name: 'Semiología veterinaria', level: 6, semester: 6, cycle: 6, year: 3, category: 'curriculo-didactica' },
        { id: 33, name: 'Reproducción animal', level: 6, semester: 6, cycle: 6, year: 3, category: 'fundamentos' },
        { id: 34, name: 'Anatomía Patológica', level: 6, semester: 6, cycle: 6, year: 3, category: 'fundamentos' },
        { id: 35, name: 'Microbiología de los Alimentos', level: 6, semester: 6, cycle: 6, year: 3, category: 'fundamentos' },
        { id: 36, name: 'Práctica Intermedia', level: 6, semester: 6, cycle: 6, year: 3, category: 'practica' },
        { id: 37, name: 'Electivo 5', level: 6, semester: 6, cycle: 6, year: 3, category: 'electivo' },

        // Year 4 (Cycles 7 & 8)
        { id: 38, name: 'Sistemas de Producción Animal', level: 7, semester: 7, cycle: 7, year: 4, category: 'politica-gestion' },
        { id: 39, name: 'Farmacología Veterinaria', level: 7, semester: 7, cycle: 7, year: 4, category: 'fundamentos' },
        { id: 40, name: 'Enfermedades producidas por agentes biológicos I', level: 7, semester: 7, cycle: 7, year: 4, category: 'fundamentos' },
        { id: 41, name: 'Procedimientos clínicos', level: 7, semester: 7, cycle: 7, year: 4, category: 'practica' },
        { id: 42, name: 'Imagenología', level: 7, semester: 7, cycle: 7, year: 4, category: 'fundamentos' },
        { id: 43, name: 'Inteligencia artificial aplicada a la salud', level: 7, semester: 7, cycle: 7, year: 4, category: 'humanidades' },

        { id: 44, name: 'Laboratorio clínico y biotecnología', level: 8, semester: 8, cycle: 8, year: 4, category: 'fundamentos' },
        { id: 45, name: 'Investigación en Ciencias Veterinarias', level: 8, semester: 8, cycle: 8, year: 4, category: 'investigacion' },
        { id: 46, name: 'Enfermedades producidas por agentes biológicos II', level: 8, semester: 8, cycle: 8, year: 4, category: 'fundamentos' },
        { id: 47, name: 'Principios de cirugía y anestesiología', level: 8, semester: 8, cycle: 8, year: 4, category: 'practica' },
        { id: 48, name: 'Medicina interna', level: 8, semester: 8, cycle: 8, year: 4, category: 'fundamentos' },
        { id: 49, name: 'Bioética', level: 8, semester: 8, cycle: 8, year: 4, category: 'humanidades' },

        // Year 5 (Cycles 9 & 10)
        { id: 50, name: 'Salud Pública Veterinaria', level: 9, semester: 9, cycle: 9, year: 5, category: 'politica-gestion' },
        { id: 51, name: 'Unidad de Investigación I', level: 9, semester: 9, cycle: 9, year: 5, category: 'investigacion' },
        { id: 52, name: 'Internado de Pequeños Animales I', level: 9, semester: 9, cycle: 9, year: 5, category: 'practica' },
        { id: 53, name: 'Internado de Animales Mayores I', level: 9, semester: 9, cycle: 9, year: 5, category: 'practica' },
        { id: 54, name: 'Formulación y Evaluación de Proyectos Veterinarios', level: 9, semester: 9, cycle: 9, year: 5, category: 'politica-gestion' },
        { id: 55, name: 'Gestión Veterinaria', level: 9, semester: 9, cycle: 9, year: 5, category: 'politica-gestion' },
        { id: 56, name: 'Práctica Profesional', level: 9, semester: 9, cycle: 9, year: 5, category: 'practica' },

        { id: 57, name: 'Una Salud', level: 10, semester: 10, cycle: 10, year: 5, category: 'politica-gestion' },
        { id: 58, name: 'Unidad de Investigación II', level: 10, semester: 10, cycle: 10, year: 5, category: 'investigacion' },
        { id: 59, name: 'Internado Electivo: Pequeños Animales II', level: 10, semester: 10, cycle: 10, year: 5, category: 'practica' },
        { id: 60, name: 'Internado Electivo: Animales Mayores', level: 10, semester: 10, cycle: 10, year: 5, category: 'practica' },
        { id: 61, name: 'Internado Electivo: Conservación, Biodiversidad y Medio Ambiente', level: 10, semester: 10, cycle: 10, year: 5, category: 'practica' },
        { id: 62, name: 'Internado Electivo: Producción y Sistemas de Aseguramiento de la Calidad', level: 10, semester: 10, cycle: 10, year: 5, category: 'practica' },
        { id: 63, name: 'Orientación Laboral y Responsabilidad Ética en Medicina Veterinaria', level: 10, semester: 10, cycle: 10, year: 5, category: 'familia-acompanamiento' },
    ];

    // Define prerequisites based on the PDF. Keys are course IDs, values are arrays of prerequisite IDs.
    const prerequisites = {
        [cite_start]7: [5], // Anatomía Animal I: Zoología [cite: 4]
        [cite_start]8: [3], // Praderas y Especies Forrajeras: Biología Celular y Molecular [cite: 4]
        [cite_start]9: [2, 3], // Fundamentos de Bioquímica: Fundamentos de la Química, Biología Celular y Molecular [cite: 4]
        [cite_start]10: [3], // Histoembriología Veterinaria: Biología Celular y Molecular (3) [cite: 4]
        [cite_start]11: [4, 5], // Ecología: Matemática, Zoología [cite: 4]
        [cite_start]13: [7], // Anatomía Animal II: Anatomía Animal I [cite: 4]
        [cite_start]14: [8, 9], // Nutrición y Alimentación Animal: Praderas y Especies Forrajeras, Fundamentos de Bioquímica [cite: 4]
        [cite_start]15: [9, 10], // Fisiología Veterinaria: Fundamentos de Bioquímica, Histoembriología Veterinaria [cite: 4]
        [cite_start]16: [7, 11], // Práctica Inicial: Anatomía Animal I, Ecología [cite: 4]
        [cite_start]17: [3, 9], // Inmunología General: Biología Celular y Molecular, Fundamentos de Bioquímica [cite: 4]
        [cite_start]20: [15], // Etología y Bienestar Animal: Fisiología Veterinaria [cite: 5]
        [cite_start]21: [15], // Histopatología: Fisiología Veterinaria [cite: 6]
        [cite_start]22: [17], // Microbiología Veterinaria: Inmunología General [cite: 6]
        [cite_start]23: [11], // Conservación de Fauna Silvestre: Ecología [cite: 6]
        [cite_start]24: [18], // Métodos de Investigación en Salud: Bioestadística [cite: 6]
        [cite_start]26: [18], // Genética en Ciencias Veterinarias: Bioestadística [cite: 6]
        [cite_start]27: [24], // Epidemiología Veterinaria: Métodos de Investigación en Salud [cite: 6]
        [cite_start]28: [13, 21, 23], // Fisiopatología Veterinaria: Anatomía Animal II, Histopatología, Conservación de Fauna Silvestre [cite: 6]
        [cite_start]32: [20, 28], // Semiología veterinaria: Etología y Bienestar Animal, Fisiopatología Veterinaria [cite: 6]
        [cite_start]33: [28], // Reproducción animal: Fisiopatología Veterinaria [cite: 6]
        [cite_start]34: [28], // Anatomía Patológica: Fisiopatología Veterinaria [cite: 6]
        [cite_start]35: [22, 24], // Microbiología de los Alimentos: Microbiología Veterinaria, Métodos de Investigación en Salud [cite: 6]
        [cite_start]36: [16, 20], // Práctica Intermedia: Práctica Inicial, Etología y Bienestar Animal [cite: 6]
        [cite_start]38: [14, 26], // Sistemas de Producción Animal: Nutrición y Alimentación Animal, Genética en Ciencias Veterinarias [cite: 6]
        [cite_start]39: [28], // Farmacología Veterinaria: Fisiopatología Veterinaria [cite: 6]
        [cite_start]40: [27, 35], // Enfermedades producidas por agentes biológicos I: Epidemiología Veterinaria, Microbiología de los Alimentos [cite: 8]
        [cite_start]41: [32], // Procedimientos clínicos: Semiología veterinaria [cite: 8]
        [cite_start]42: [34], // Imagenología: Anatomía Patológica [cite: 8]
        [cite_start]43: [18], // Inteligencia artificial aplicada a la salud: Bioestadística [cite: 8]
        [cite_start]44: [34, 40], // Laboratorio clínico y biotecnología: Anatomía Patológica, Enfermedades producidas por agentes biológicos I [cite: 8]
        [cite_start]45: [24], // Investigación en Ciencias Veterinarias: Métodos de Investigación en Salud [cite: 8]
        [cite_start]46: [40, 39], // Enfermedades producidas por agentes biológicos II: Enfermedades producidas por agentes biológicos I, Farmacología Veterinaria [cite: 8]
        [cite_start]47: [39, 41], // Principios de cirugía y anestesiología: Farmacología Veterinaria, Procedimientos clínicos [cite: 8]
        [cite_start]48: [32, 42], // Medicina interna: Semiología veterinaria, Imagenología [cite: 8]
        [cite_start]50: [46], // Salud Pública Veterinaria: Enfermedades producidas por agentes biológicos II [cite: 8]
        [cite_start]51: [45, 49], // Unidad de Investigación I: Investigación en Ciencias Veterinarias, Bioética [cite: 8]
        [cite_start]52: [44, 47, 48], // Internado de Pequeños Animales I: Laboratorio clínico y biotecnología, Principios de cirugía y anestesiología, Medicina interna [cite: 8]
        [cite_start]53: [44, 47, 48], // Internado de Animales Mayores I: Laboratorio clínico y biotecnología, Principios de cirugía y anestesiología, Medicina interna [cite: 8]
        [cite_start]54: [30, 38], // Formulación y Evaluación de Proyectos Veterinarios: Gestión Contable y Financiera, Sistemas de Producción Animal [cite: 10]
        [cite_start]55: [30, 38], // Gestión Veterinaria: Gestión Contable y Financiera, Sistemas de Producción Animal [cite: 10]
        [cite_start]// 56: ['licenciatura'], // Práctica Profesional: "Obtención de licenciatura" - this is a special case. [cite: 10]
        [cite_start]57: [50, 54], // Una Salud: Salud Pública Veterinaria, Formulación y Evaluación de Proyectos Veterinarios [cite: 10]
        [cite_start]58: [51], // Unidad de Investigación II: Unidad de Investigación I [cite: 10]
        [cite_start]63: [36] // Orientación Laboral y Responsabilidad Ética en Medicina Veterinaria: Práctica Intermedia [cite: 10]
    };

    // Load approved courses from localStorage or initialize an empty Set
    let approvedCourses = new Set(JSON.parse(localStorage.getItem('approvedCourses')) || []);

    // Function to update the progress bar and percentage
    function updateProgress() {
        const totalCourses = courses.length;
        const approvedCount = approvedCourses.size;
        const percentage = totalCourses === 0 ? 0 : (approvedCount / totalCourses) * 100;
        progressPercentageSpan.textContent = `${percentage.toFixed(0)}%`;
        progressFill.style.width = `${percentage}%`;
    }

    // Function to check if a course's prerequisites are met
    function arePrerequisitesMet(courseId) {
        const prereqs = prerequisites[courseId];
        if (!prereqs || prereqs.length === 0) {
            return true; // No prerequisites
        }
        return prereqs.every(prereqId => approvedCourses.has(prereqId));
    }

    // Function to render/re-render the curriculum grid
    function renderCurriculum() {
        // Clear previous courses from all rows
        for (let i = 1; i <= 11; i++) { // Assuming a max of 11 rows for courses based on visual density
            const rowElement = document.getElementById(`course-row-${i}`);
            if (rowElement) {
                rowElement.innerHTML = '';
            }
        }

        // Initialize objects to hold courses for each cycle and "row" (depth)
        const coursesByCycleAndRow = {}; // { cycle: { rowNum: [courses] } }
        const maxCoursesInAnyColumn = {}; // Keep track of how many courses are in each cycle's column

        // Group courses by cycle and assign them to a "row" based on their position in the cycle
        // This is a simplified approach to mimic the image's row layout.
        // It assumes courses are ordered in the 'courses' array roughly by their vertical position.
        const cycles = [...new Set(courses.map(course => course.cycle))].sort((a, b) => a - b);

        cycles.forEach(cycleNum => {
            const coursesInCycle = courses
                .filter(course => course.cycle === cycleNum)
                .sort((a, b) => a.id - b.id); // Sort by ID to maintain a consistent order

            coursesInCycle.forEach((course, index) => {
                if (!coursesByCycleAndRow[cycleNum]) {
                    coursesByCycleAndRow[cycleNum] = {};
                }
                const rowNum = index + 1; // 1-based index for visual rows
                if (!coursesByCycleAndRow[cycleNum][rowNum]) {
                    coursesByCycleAndRow[cycleNum][rowNum] = [];
                }
                coursesByCycleAndRow[cycleNum][rowNum].push(course);

                // Update max courses for this cycle's column
                maxCoursesInAnyColumn[cycleNum] = Math.max(maxCoursesInAnyColumn[cycleNum] || 0, rowNum);
            });
        });

        // Determine the overall maximum number of rows needed
        const overallMaxRows = Math.max(...Object.values(maxCoursesInAnyColumn), 0);

        // Dynamically add rows if needed (beyond the initial 11 in HTML)
        for (let i = 1; i <= overallMaxRows; i++) {
            let rowElement = document.getElementById(`course-row-${i}`);
            if (!rowElement) {
                rowElement = document.createElement('div');
                rowElement.className = 'courses-row';
                rowElement.id = `course-row-${i}`;
                curriculumGrid.appendChild(rowElement);
            }
        }


        // Iterate through rows and cycles to place course cards
        for (let rowIdx = 1; rowIdx <= overallMaxRows; rowIdx++) {
            const rowElement = document.getElementById(`course-row-${rowIdx}`);
            if (!rowElement) continue; // Should not happen if rows are created dynamically

            // Create placeholders or actual course cards for each cycle in this row
            for (let cycleIdx = 1; cycleIdx <= 10; cycleIdx++) { // 10 cycles as per image
                const courseWrapper = document.createElement('div');
                courseWrapper.className = 'course-card-wrapper';
                courseWrapper.style.gridColumn = cycleIdx; // Assign to the correct cycle column

                const coursesInThisCell = (coursesByCycleAndRow[cycleIdx] && coursesByCycleAndRow[cycleIdx][rowIdx]) || [];

                if (coursesInThisCell.length > 0) {
                    const course = coursesInThisCell[0]; // Assuming one course per cell for simplicity
                    const courseCard = document.createElement('div');
                    courseCard.className = `course-card ${course.category}`;
                    courseCard.dataset.id = course.id;
                    courseCard.textContent = course.name;

                    if (approvedCourses.has(course.id)) {
                        courseCard.classList.add('approved');
                    } else if (!arePrerequisitesMet(course.id)) {
                        courseCard.classList.add('locked');
                        courseCard.title = 'Prerrequisitos no cumplidos';
                    }

                    courseCard.addEventListener('click', () => {
                        if (courseCard.classList.contains('locked')) {
                            alert('No puedes aprobar este ramo, los prerrequisitos no han sido cumplidos.');
                            return;
                        }

                        if (approvedCourses.has(course.id)) {
                            approvedCourses.delete(course.id);
                        } else {
                            approvedCourses.add(course.id);
                        }
                        localStorage.setItem('approvedCourses', JSON.stringify(Array.from(approvedCourses)));
                        renderCurriculum(); // Re-render to update states and re-evaluate prerequisites
                        updateProgress();
                    });
                    courseWrapper.appendChild(courseCard);
                } else {
                    // Add an empty div or placeholder if no course exists for this cell,
                    // to maintain grid structure.
                    const placeholder = document.createElement('div');
                    placeholder.className = 'course-card-placeholder'; // Add specific styling for placeholder if desired
                    courseWrapper.appendChild(placeholder);
                }
                rowElement.appendChild(courseWrapper);
            }
        }
    }

    // Initial render and progress update
    renderCurriculum();
    updateProgress();
});
