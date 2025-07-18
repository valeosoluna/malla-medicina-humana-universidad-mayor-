const courses = [
    // CICLO 1
    { name: "Biología molecular y genética", semester: 1, cycle: 1, area: "Formación Básica" },
    { name: "Fundamentos de la medicina", semester: 1, cycle: 1, area: "Formación Básica" },
    { name: "Fisiología médica I", semester: 1, cycle: 1, area: "Formación Disciplinar" },
    { name: "Histoembriología I", semester: 1, cycle: 1, area: "Formación Básica" },
    { name: "Anatomía humana I", semester: 1, cycle: 1, area: "Formación Básica" },
    { name: "Fundamentos de la química", semester: 1, cycle: 1, area: "Formación Básica" },
    { name: "Salud y sociedad", semester: 1, cycle: 1, area: "Formación Básica" },

    { name: "Semiología I", semester: 2, cycle: 1, area: "Formación Disciplinar" },
    { name: "Fisiología médica II", semester: 2, cycle: 1, area: "Formación Disciplinar" },
    { name: "Histoembriología II", semester: 2, cycle: 1, area: "Formación Básica" },
    { name: "Anatomía humana II", semester: 2, cycle: 1, area: "Formación Básica" },
    { name: "Fundamentos de bioquímica", semester: 2, cycle: 1, area: "Formación Básica" },
    { name: "Psicología para la atención en salud", semester: 2, cycle: 1, area: "Formación Básica" },

    // CICLO 2
    { name: "Atención Primaria y alta prevalencia", semester: 3, cycle: 2, area: "Formación Disciplinar" },
    { name: "Integrado de patología morfofuncional I", semester: 3, cycle: 2, area: "Formación Disciplinar" },
    { name: "Agentes infecciosos I", semester: 3, cycle: 2, area: "Formación Disciplinar" },
    { name: "Inmunología e Inmunización", semester: 3, cycle: 2, area: "Formación Disciplinar" },
    { name: "Farmacología I", semester: 3, cycle: 2, area: "Formación Disciplinar" },
    { name: "Psicología en el curso de la vida", semester: 3, cycle: 2, area: "Formación Básica" },

    { name: "Semiología II", semester: 4, cycle: 2, area: "Formación Disciplinar" },
    { name: "Integrado de patología morfofuncional II", semester: 4, cycle: 2, area: "Formación Disciplinar" },
    { name: "Agentes infecciosos II", semester: 4, cycle: 2, area: "Formación Disciplinar" },
    { name: "Métodos de diagnóstico clínica", semester: 4, cycle: 2, area: "Formación Disciplinar" },
    { name: "Farmacología II", semester: 4, cycle: 2, area: "Formación Disciplinar" },
    { name: "Nutrición clínica", semester: 4, cycle: 2, area: "Formación Disciplinar" },

    // LICENCIADO(A) EN MEDICINA
    { name: "Medicina interna I", semester: 5, cycle: "Licenciado", area: "Formación Disciplinar" },
    { name: "Medicina aplicada I", semester: 5, cycle: "Licenciado", area: "Formación Disciplinar" },
    { name: "Neurología", semester: 5, cycle: "Licenciado", area: "Formación Disciplinar" },
    { name: "Salud basada en la evidencia", semester: 5, cycle: "Licenciado", area: "Formación Disciplinar" },
    { name: "Bioética", semester: 5, cycle: "Licenciado", area: "Formación Disciplinar" },
    { name: "Electivo 1", semester: 5, cycle: "Licenciado", area: "Formación Electiva" },

    { name: "Medicina interna II", semester: 6, cycle: "Licenciado", area: "Formación Disciplinar" },
    { name: "Medicina aplicada II", semester: 6, cycle: "Licenciado", area: "Formación Disciplinar" },
    { name: "Traumatología", semester: 6, cycle: "Licenciado", area: "Formación Disciplinar" },
    { name: "Salud pública y epidemiología", semester: 6, cycle: "Licenciado", area: "Formación Disciplinar" },
    { name: "Gestión en sistemas de salud", semester: 6, cycle: "Licenciado", area: "Formación Disciplinar" },
    { name: "Electivo 2", semester: 6, cycle: "Licenciado", area: "Formación Electiva" },

    { name: "Cirugía", semester: 7, cycle: "Licenciado", area: "Formación Disciplinar" },
    { name: "Pediatría, traumatología y cirugía infantil", semester: 7, cycle: "Licenciado", area: "Formación Disciplinar" },
    { name: "Especialidades médicas I", semester: 7, cycle: "Licenciado", area: "Formación Disciplinar" },
    { name: "Medicina legal", semester: 7, cycle: "Licenciado", area: "Formación Disciplinar" },
    { name: "Electivo 3", semester: 7, cycle: "Licenciado", area: "Formación Electiva" },
    { name: "Métodos de Investigación en salud y bioestadística aplicada", semester: 7, cycle: "Licenciado", area: "Formación Básica" }, // Added from source

    { name: "Ginecología y obstetricia", semester: 8, cycle: "Licenciado", area: "Formación Disciplinar" },
    { name: "Especialidades médicas II", semester: 8, cycle: "Licenciado", area: "Formación Disciplinar" },
    { name: "Oncología y cuidados paliativos", semester: 8, cycle: "Licenciado", area: "Formación Disciplinar" },
    { name: "Inteligencia artificial aplicada a la salud", semester: 8, cycle: "Licenciado", area: "Formación Disciplinar" },
    { name: "Electivo 4", semester: 8, cycle: "Licenciado", area: "Formación Electiva" },

    { name: "Psiquiatría Infanto-juvenil y del adulto I", semester: 9, cycle: "Licenciado", area: "Formación Disciplinar" },
    { name: "Especialidades médicas III", semester: 9, cycle: "Licenciado", area: "Formación Disciplinar" },
    { name: "Electivo 5", semester: 9, cycle: "Licenciado", area: "Formación Electiva" },

    { name: "Psiquiatría infanto-juvenil y del adulto II", semester: 10, cycle: "Licenciado", area: "Formación Disciplinar" },

    // TÍTULO PROFESIONAL: MÉDICO(A) CIRUJANO (A)
    { name: "Internado de medicina interna", semester: 11, cycle: "Médico(a) Cirujano(a)", area: "Formación Disciplinar" },
    { name: "Internado de atención primaria", semester: 11, cycle: "Médico(a) Cirujano(a)", area: "Formación Disciplinar" },
    { name: "Internado de pediatría", semester: 11, cycle: "Médico(a) Cirujano(a)", area: "Formación Disciplinar" },
    { name: "Internado de cirugía", semester: 12, cycle: "Médico(a) Cirujano(a)", area: "Formación Disciplinar" },
    { name: "Internado de psiquiatría", semester: 12, cycle: "Médico(a) Cirujano(a)", area: "Formación Disciplinar" },
    { name: "Internado de urgencia", semester: 12, cycle: "Médico(a) Cirujano(a)", area: "Formación Disciplinar" },
    { name: "Internado de salud en persona mayor", semester: 13, cycle: "Médico(a) Cirujano(a)", area: "Formación Disciplinar" },
    { name: "Internado de obstetricia y ginecología", semester: 13, cycle: "Médico(a) Cirujano(a)", area: "Formación Disciplinar" },
    { name: "Internado electivo I", semester: 13, cycle: "Médico(a) Cirujano(a)", area: "Formación Electiva" },
    { name: "Internado electivo II", semester: 14, cycle: "Médico(a) Cirujano(a)", area: "Formación Electiva" },
    { name: "Internado electivo III", semester: 14, cycle: "Médico(a) Cirujano(a)", area: "Formación Electiva" },
    { name: "Integración para la práctica profesional", semester: 14, cycle: "Médico(a) Cirujano(a)", area: "Formación Disciplinar" },
];
