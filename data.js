// data.js

const curriculumData = {
    "CICLO 1": {
        "Semestre 1": [
            { id: "s1_1", name: "Biologia molecular y genética", area: "AREA FORMACION BASICA" },
            { id: "s1_2", name: "Fundamentos de la medicina", area: "AREA FORMACION BASICA" },
            { id: "s1_3", name: "Semiologia I", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s1_4", name: "Histoembriologia I", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s1_5", name: "Anatomia humana I", area: "AREA FORMACION BASICA" },
            { id: "s1_6", name: "Fundamentos de la química", area: "AREA FORMACION BASICA" },
            { id: "s1_7", name: "Psicología para la atención en salud", area: "AREA FORMACION BASICA" }
        ],
        "Semestre 2": [
            { id: "s2_1", name: "Fisiologia médica I", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s2_2", name: "Semiologia II", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s2_3", name: "Histoembriologia II", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s2_4", name: "Anatomía humana II", area: "AREA FORMACION BASICA" },
            { id: "s2_5", name: "Neurociencias", area: "AREA FORMACION BASICA" },
            { id: "s2_6", name: "Fundamentos de bioquímica", area: "AREA FORMACION BASICA" },
            { id: "s2_7", name: "Psicología en el curso de la vida", area: "AREA FORMACION BASICA" },
            { id: "s2_8", name: "Salud y sociedad", area: "AREA FORMACION BASICA" }
        ],
        "Semestre 3": [
            { id: "s3_1", name: "Fisiologia médica II", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s3_2", name: "Atención Primaria y alta prevalencia", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s3_3", name: "Integrado de patología morfofuncional I", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s3_4", name: "Agentes infecciosos I", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s3_5", name: "Inmunologia e Inmunización", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s3_6", name: "Farmacología I", area: "AREA FORMACION DISCIPLINAR" }
        ],
        "Semestre 4": [
            { id: "s4_1", name: "Medicina interna I", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s4_2", name: "Integrado de patologia morfofuncional II", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s4_3", name: "Agentes infecciosos II", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s4_4", name: "Métodos de diagnóstico clinica", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s4_5", name: "Farmacologia II", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s4_6", name: "Métodos de Investigación en salud y bioestadistica aplicada", area: "AREA FORMACION BASICA" }
        ],
        "Semestre 5": [
            { id: "s5_1", name: "Medicina interna II**", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s5_2", name: "Cirugía", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s5_3", name: "Medicina aplicada I", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s5_4", name: "Neurología", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s5_5", name: "Traumatologia", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s5_6", name: "Salud basada en la evidencia", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s5_7", name: "Nutrición clínica", area: "AREA FORMACION DISCIPLINAR" }
        ],
        "Semestre 6": [
            { id: "s6_1", name: "Pediatria, traumatología y cirugia infantil", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s6_2", name: "Ginecología y obstetricia", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s6_3", name: "Medicina aplicada II", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s6_4", name: "Especialides médicas I", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s6_5", name: "Salud pública y epidemiologia", area: "AREA FORMACION BASICA" },
            { id: "s6_6", name: "Bioética", area: "AREA FORMACION BASICA" }
        ],
        "Semestre 7": [
            { id: "s7_1", name: "Especialides médicas II", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s7_2", name: "Psiquiatria Infanto-juvenil y del adulto I", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s7_3", name: "Gestión en sistemas de salud", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s7_4", name: "Electivo 1", area: "AREA FORMACION ELECTIVA" },
            { id: "s7_5", name: "Electivo 2", area: "AREA FORMACION ELECTIVA" }
        ],
        "Semestre 8": [
            { id: "s8_1", name: "Especialidades médicas III", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s8_2", name: "Psiquiatria infanto-juvenil y del adulto II", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s8_3", name: "Medicina legal", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s8_4", name: "Oncología y cuidados paliativos", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s8_5", name: "Inteligencia artificial aplicada a la salud", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s8_6", name: "Electivo 3", area: "AREA FORMACION ELECTIVA" },
            { id: "s8_7", name: "Electivo 4", area: "AREA FORMACION ELECTIVA" }
        ]
    },
    "CICLO 2": {
        "Semestre 9": [
            { id: "s9_1", name: "Internado de medicina interna", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s9_2", name: "Internado de atención primaria", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s9_3", name: "Electivo 5", area: "AREA FORMACION ELECTIVA" }
        ],
        "Semestre 10": [
            { id: "s10_1", name: "Internado de pediatria", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s10_2", name: "Internado de cirugía", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s10_3", name: "Internado electivo I", area: "AREA FORMACION ELECTIVA" }
        ],
        "Semestre 11": [
            { id: "s11_1", name: "Internado de psiquiatría", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s11_2", name: "Internado de urgencia", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s11_3", name: "Internado electivo II", area: "AREA FORMACION ELECTIVA" }
        ],
        "Semestre 12": [
            { id: "s12_1", name: "Internado de salud en persona mayor", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s12_2", name: "Internado de obstetricia y ginecologia", area: "AREA FORMACION DISCIPLINAR" },
            { id: "s12_3", name: "Internado electivo III", area: "AREA FORMACION ELECTIVA" }
        ],
        "Semestre 13": [], // Not explicitly listed courses, likely practice/research
        "Semestre 14": [
            { id: "s14_1", name: "Integración para la práctica profesional", area: "AREA FORMACION DISCIPLINAR" }
        ]
    }
};

const degreeTitles = {
    licenciado: "LICENCIADO(A) EN MEDICINA",
    medicoCirujano: "MÉDICO(A) CIRUJANO (A)"
};

// Map semester numbers to keys for easier access
const semesterOrder = [
    "Semestre 1", "Semestre 2", "Semestre 3", "Semestre 4",
    "Semestre 5", "Semestre 6", "Semestre 7", "Semestre 8",
    "Semestre 9", "Semestre 10", "Semestre 11", "Semestre 12",
    "Semestre 13", "Semestre 14"
];
