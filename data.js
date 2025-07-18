const courseData = [
    {
        cycle: "CICLO 1",
        semesters: [
            {
                semester: "Semestre 1",
                courses: [
                    { name: "Biologia molecular y genética", area: "AREA FORMACION BASICA" },
                    { name: "Fundamentos de la medicina", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Semiologia I", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Fundamentos de la química", area: "AREA FORMACION BASICA" }
                ]
            },
            {
                semester: "Semestre 2",
                courses: [
                    { name: "Fisiologia médica I", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Histoembriologia I", area: "AREA FORMACION BASICA" },
                    { name: "Anatomia humana I", area: "AREA FORMACION BASICA" },
                    { name: "Fundamentos de bioquímica", area: "AREA FORMACION BASICA" }
                ]
            },
            {
                semester: "Semestre 3",
                courses: [
                    { name: "Semiologia II", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Atención Primaria y alta prevalencia", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Histoembriologia II", area: "AREA FORMACION BASICA" },
                    { name: "Anatomía humana II", area: "AREA FORMACION BASICA" },
                    { name: "Psicología para la atención en salud", area: "AREA FORMACION BASICA" }
                ]
            },
            {
                semester: "Semestre 4",
                courses: [
                    { name: "Fisiologia médica II", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Integrado de patología morfofuncional I", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Agentes infecciosos I", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Métodos de Investigación en salud y bioestadistica aplicada", area: "AREA FORMACION BASICA" },
                    { name: "Psicología en el curso de la vida", area: "AREA FORMACION BASICA" }
                ]
            },
            {
                semester: "Semestre 5",
                courses: [
                    { name: "Medicina interna I", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Integrado de patologia morfofuncional II", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Agentes infecciosos II", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Neurociencias", area: "AREA FORMACION BASICA" },
                    { name: "Salud y sociedad", area: "AREA FORMACION BASICA" }
                ]
            },
            {
                semester: "Semestre 6",
                courses: [
                    { name: "Medicina interna II", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Métodos de diagnóstico clinica", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Inmunologia e Inmunización", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Farmacología I", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Farmacologia II", area: "AREA FORMACION DISCIPLINAR" }
                ]
            }
        ]
    },
    {
        cycle: "CICLO 2",
        semesters: [
            {
                semester: "Semestre 7",
                courses: [
                    { name: "Cirugía", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Medicina aplicada I", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Neurología", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Salud basada en la evidencia", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Electivo 1", area: "AREA FORMACIÓN ELECTIVA" }
                ]
            },
            {
                semester: "Semestre 8",
                courses: [
                    { name: "Traumatologia", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Medicina aplicada II", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Salud pública y epidemiologia", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Electivo 2", area: "AREA FORMACIÓN ELECTIVA" },
                    { name: "Bioética", area: "AREA FORMACION DISCIPLINAR" }
                ]
            },
            {
                semester: "Semestre 9",
                courses: [
                    { name: "Pediatria, traumatología y cirugia infantil", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Ginecología y obstetricia", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Especialides médicas I", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Electivo 3", area: "AREA FORMACIÓN ELECTIVA" },
                    { name: "Nutrición clínica", area: "AREA FORMACION DISCIPLINAR" }
                ]
            },
            {
                semester: "Semestre 10",
                courses: [
                    { name: "Especialides médicas II", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Electivo 4", area: "AREA FORMACIÓN ELECTIVA" },
                    { name: "Gestión en sistemas de salud", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Medicina legal", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Psiquiatria Infanto-juvenil y del adulto I", area: "AREA FORMACION DISCIPLINAR" }
                ]
            },
            {
                semester: "Semestre 11",
                courses: [
                    { name: "Especialidades médicas III", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Electivo 5", area: "AREA FORMACIÓN ELECTIVA" },
                    { name: "Oncología y cuidados paliativos", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Psiquiatria infanto-juvenil y del adulto II", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Inteligencia artificial aplicada a la salud", area: "AREA FORMACION DISCIPLINAR" }
                ]
            }
        ]
    },
    {
        cycle: "CICLO 3", // Assuming internados are part of a third cycle
        semesters: [
            {
                semester: "Semestre 12",
                courses: [
                    { name: "Internado de medicina interna", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Internado de atención primaria", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Internado de pediatria", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Internado de cirugía", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Internado de psiquiatría", area: "AREA FORMACION DISCIPLINAR" }
                ]
            },
            {
                semester: "Semestre 13",
                courses: [
                    { name: "Internado de urgencia", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Internado de salud en persona mayor", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Internado de obstetricia y ginecologia", area: "AREA FORMACION DISCIPLINAR" },
                    { name: "Internado electivo I", area: "AREA FORMACIÓN ELECTIVA" },
                    { name: "Internado electivo II", area: "AREA FORMACIÓN ELECTIVA" }
                ]
            },
            {
                semester: "Semestre 14",
                courses: [
                    { name: "Internado electivo III", area: "AREA FORMACIÓN ELECTIVA" },
                    { name: "Integración para la práctica profesional", area: "AREA FORMACION DISCIPLINAR" }
                ]
            }
        ]
    }
];

const programInfo = {
    licenciate: "LICENCIADO(A) EN MEDICINA",
    professionalTitle: "MÉDICO(A) CIRUJANO (A)",
    notes: [
        "Las asignaturas que consideran practicas clinicas son de caracter rotativo anual.",
        "Para cursar los internados, se debe haber obtenido el grado académico de licenciado.",
        "La malla curricular podria ser modificada en función del mejoramiento continuo y regulatorno de la carrera."
    ]
};
