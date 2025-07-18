// data.js - Corrected based on "Malla medi pdf.pdf"

const curriculumData = {
    "CICLO 1": {
        "Semestre 1": [
            { id: "s1_1", name: "Fundamentos de la medicina" },
            { id: "s1_2", name: "Biologia molecular y genética" },
            { id: "s1_3", name: "Anatomía humana I" },
            { id: "s1_4", name: "Psicología para la atención en salud" }
        ],
        "Semestre 2": [
            { id: "s2_1", name: "Histoembriologia I" },
            { id: "s2_2", name: "Anatomía humana II" },
            { id: "s2_3", name: "Fundamentos de bioquímica" },
            { id: "s2_4", name: "Psicología en el curso de la vida" },
            { id: "s2_5", name: "Salud y sociedad" }
        ],
        "Semestre 3": [
            { id: "s3_1", name: "Semiologia I" },
            { id: "s3_2", name: "Fisiología médica I" },
            { id: "s3_3", name: "Histoembriología II" },
            { id: "s3_4", name: "Neurociencias" },
            { id: "s3_5", name: "Electivo 1" }
        ],
        "Semestre 4": [ // Extracted from "Semestre 5 Semestre 4" column
            { id: "s4_1", name: "Semiología II" },
            { id: "s4_2", name: "Atención primaria y alta prevalencia" },
            { id: "s4_3", name: "Fisiología médica II" },
            { id: "s4_4", name: "Integrado de patología morfofuncional I" },
            { id: "s4_5", name: "Agentes infecciosos II" }, // Appears before Agentes infecciosos I in PDF
            { id: "s4_6", name: "Agentes infecciosos I" },
            { id: "s4_7", name: "Inmunologia e inmunización" },
            { id: "s4_8", name: "Farmacología I" },
            { id: "s4_9", name: "Electivo 2" }
        ],
        "Semestre 5": [ // Extracted from "Semestre 5 Semestre 4" column
            { id: "s5_1", name: "Medicina Interna I" },
            { id: "s5_2", name: "Medicina interna" }, // Listed again, assuming a different course or typo in source
            { id: "s5_3", name: "Integrado de patología morfofuncional II" },
            { id: "s5_4", name: "Métodos de diagnóstico clínico" },
            { id: "s5_5", name: "Farmacologia II" },
            { id: "s5_6", name: "Salud pública y epidemiología" },
            { id: "s5_7", name: "Métodos de investigación en salud y bioestadística aplicada" },
            { id: "s5_8", name: "Salud basada en la evidencia" },
            { id: "s5_9", name: "Electivo 3" }
        ],
        "Semestre 6": [ // Extracted from "Semestre 7 Semestre 6" column
            { id: "s6_1", name: "Cirugia" },
            { id: "s6_2", name: "Traumatologia" },
            { id: "s6_3", name: "Especialidades médicas II" },
            { id: "s6_4", name: "Nutrición clínica" },
            { id: "s6_5", name: "Gestión en sistemas de salud" },
            { id: "s6_6", name: "Bioética" }
        ],
        "Semestre 7": [ // Extracted from "Semestre 7 Semestre 6" column
            { id: "s7_1", name: "Medicina aplicada I" },
            { id: "s7_2", name: "Pediatria, traumatología y cirugia infantil" },
            { id: "s7_3", name: "Medicina legal" },
            { id: "s7_4", name: "Psiquiatría infanto-juvenil y del adulto I" },
            { id: "s7_5", name: "Oncología y cuidados paliativos" },
            { id: "s7_6", name: "Electivo 4" }
        ],
        "Semestre 8": [
            { id: "s8_1", name: "Medicina aplicada II" },
            { id: "s8_2", name: "Ginecología y obstetricia" },
            { id: "s8_3", name: "Especialidades médicas III" },
            { id: "s8_4", name: "Psiquiatría infanto-juvenil y del adulto II" },
            { id: "s8_5", name: "Inteligencia artificial aplicada a la salud" },
            { id: "s8_6", name: "Electivo 5" }
        ]
    },
    "CICLO 2": {
        "Semestre 9": [
            { id: "s9_1", name: "INTERNADO MEDICINA INTERNA" },
            { id: "s9_2", name: "INTERNADO DE ATENCIÓN PRIMARIA" }
        ],
        "Semestre 10": [
            { id: "s10_1", name: "INTERNADO DE PEDIATRIA" },
            { id: "s10_2", name: "INTERNADO DE CIRUGÍA" }
        ],
        "Semestre 11": [ // Extracted from "Semestre 12 Semestre 11" column
            { id: "s11_1", name: "INTERNADO DE PSIQUIATRÍA" },
            { id: "s11_2", name: "INTERNADO DE SALUD EN PERSONA MAYOR" },
            { id: "s11_3", name: "INTERNADO ELECTIVO I" }
        ],
        "Semestre 12": [ // Extracted from "Semestre 12 Semestre 11" column
            { id: "s12_1", name: "INTERNADO DE URGENCIA" },
            { id: "s12_2", name: "INTERNADO DE OBSTETRICIA Y GINECOLOGÍA" },
            { id: "s12_3", name: "INTERNADO ELECTIVO II" }
        ],
        "Semestre 13": [ // No specific courses listed for this semester, but it exists
            { id: "s13_1", name: "INTERNADO ELECTIVO III" } // Based on the placement in the last row
        ],
        "Semestre 14": [
            { id: "s14_1", name: "INTEGRACIÓN PARA LA PRÁCTICA PROFESIONAL" }
        ]
    }
};

const degreeTitles = {
    licenciado: "LICENCIADO(A) EN MEDICINA", // Retained from previous prompt as new PDF doesn't specify
    medicoCirujano: "MÉDICO(A) CIRUJANO (A)" // Retained from previous prompt as new PDF doesn't specify
};

// Map semester numbers to keys for easier access
const semesterOrder = [
    "Semestre 1", "Semestre 2", "Semestre 3", "Semestre 4",
    "Semestre 5", "Semestre 6", "Semestre 7", "Semestre 8",
    "Semestre 9", "Semestre 10", "Semestre 11", "Semestre 12",
    "Semestre 13", "Semestre 14"
];
