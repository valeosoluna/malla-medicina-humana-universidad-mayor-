// data.js 
 const coursesData = [ 
     // CICLO 1 - Semestre 1 
 [cite_start]    { id: 1, name: "Biología molecular y genética", semester: 1, prerequisites: [], area: "Básica", approved: false, grade: null, description: "" }, // [cite: 5, 6, 7]
     [cite_start]{ id: 2, name: "Fundamentos de la medicina", semester: 1, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "" }, // [cite: 8]
     [cite_start]{ id: 3, name: "Fisiología médica I", semester: 1, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "" }, // [cite: 27]
     [cite_start]{ id: 4, name: "Histoembriología I", semester: 1, prerequisites: [], area: "Básica", approved: false, grade: null, description: "" }, // [cite: 41]
     [cite_start]{ id: 5, name: "Anatomía humana I", semester: 1, prerequisites: [], area: "Básica", approved: false, grade: null, description: "" }, // [cite: 43]
     [cite_start]{ id: 6, name: "Fundamentos de la química", semester: 1, prerequisites: [], area: "Básica", approved: false, grade: null, description: "" }, // [cite: 46]
     [cite_start]{ id: 7, name: "Psicología para la atención en salud", semester: 1, prerequisites: [], area: "Básica", approved: false, grade: null, description: "" }, // [cite: 48, 49, 50]
     [cite_start]{ id: 8, name: "Salud y sociedad", semester: 1, prerequisites: [], area: "Básica", approved: false, grade: null, description: "" }, // [cite: 52]

     // CICLO 1 - Semestre 2 
 [cite_start]    { id: 9, name: "Semiología I", semester: 2, prerequisites: [2], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Fundamentos de la medicina (2) [cite: 9]
     [cite_start]{ id: 10, name: "Fisiología médica II", semester: 2, prerequisites: [3], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Fisiología médica I (3) [cite: 29]
     [cite_start]{ id: 11, name: "Integrado de patología morfofuncional I", semester: 2, prerequisites: [4, 5], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Histoembriología I (4), Anatomía humana I (5) [cite: 31]
     [cite_start]{ id: 12, name: "Histoembriología II", semester: 2, prerequisites: [4], area: "Básica", approved: false, grade: null, description: "" }, // Prereq: Histoembriología I (4) [cite: 41]
     [cite_start]{ id: 13, name: "Anatomía humana II", semester: 2, prerequisites: [5], area: "Básica", approved: false, grade: null, description: "" }, // Prereq: Anatomía humana I (5) [cite: 44]
     [cite_start]{ id: 14, name: "Fundamentos de bioquímica", semester: 2, prerequisites: [6], area: "Básica", approved: false, grade: null, description: "" }, // Prereq: Fundamentos de la química (6) [cite: 47]
     [cite_start]{ id: 15, name: "Psicología en el curso de la vida", semester: 2, prerequisites: [7], area: "Básica", approved: false, grade: null, description: "" }, // Prereq: Psicología para la atención en salud (7) [cite: 51]
     [cite_start]{ id: 16, name: "Métodos de Investigación en salud y bioestadística aplicada", semester: 2, prerequisites: [], area: "Básica", approved: false, grade: null, description: "" }, // [cite: 42]

     // CICLO 1 - Semestre 3 
 [cite_start]    { id: 17, name: "Semiología II", semester: 3, prerequisites: [9, 10, 11], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Semiología I (9), Fisiología médica II (10), Integrado de patología morfofuncional I (11) [cite: 28]
     [cite_start]{ id: 18, name: "Integrado de patología morfofuncional II", semester: 3, prerequisites: [11], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Integrado de patología morfofuncional I (11) [cite: 35]
     [cite_start]{ id: 19, name: "Agentes infecciosos I", semester: 3, prerequisites: [14], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Fundamentos de bioquímica (14) [cite: 36]
     [cite_start]{ id: 20, name: "Neurociencias", semester: 3, prerequisites: [13, 15], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Anatomía humana II (13), Psicología en el curso de la vida (15) [cite: 45]
     [cite_start]{ id: 21, name: "Farmacología I", semester: 3, prerequisites: [10, 14], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Fisiología médica II (10), Fundamentos de bioquímica (14) [cite: 40]
     [cite_start]{ id: 22, name: "Salud pública y epidemiología", semester: 3, prerequisites: [8, 16], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Salud y sociedad (8), Métodos de Investigación en salud y bioestadística aplicada (16) [cite: 68]
     [cite_start]{ id: 23, name: "Nutrición clínica", semester: 3, prerequisites: [14], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Fundamentos de bioquímica (14) [cite: 75]

     // CICLO 1 - Semestre 4 
 [cite_start]    { id: 24, name: "Atención Primaria y alta prevalencia", semester: 4, prerequisites: [17, 19, 22], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Semiología II (17), Agentes infecciosos I (19), Salud pública y epidemiología (22) [cite: 30]
     [cite_start]{ id: 25, name: "Agentes infecciosos II", semester: 4, prerequisites: [19], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Agentes infecciosos I (19) [cite: 37]
     [cite_start]{ id: 26, name: "Inmunología e Inmunización", semester: 4, prerequisites: [1], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Biología molecular y genética (1) [cite: 39]
     [cite_start]{ id: 27, name: "Farmacología II", semester: 4, prerequisites: [21], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Farmacología I (21) [cite: 53]
     [cite_start]{ id: 28, name: "Salud basada en la evidencia", semester: 4, prerequisites: [16, 22], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Métodos de Investigación en salud y bioestadística aplicada (16), Salud pública y epidemiología (22) [cite: 67]
     [cite_start]{ id: 29, name: "Electivo 1", semester: 4, prerequisites: [], area: "Electiva", approved: false, grade: null, description: "" }, // [cite: 69]

     // CICLO 2 - Semestre 5 
 [cite_start]    { id: 30, name: "Medicina interna I", semester: 5, prerequisites: [24, 25, 26], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Atención Primaria y alta prevalencia (24), Agentes infecciosos II (25), Inmunología e Inmunización (26) [cite: 32]
     [cite_start]{ id: 31, name: "Cirugía", semester: 5, prerequisites: [18, 27], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Integrado de patología morfofuncional II (18), Farmacología II (27) [cite: 34]
     [cite_start]{ id: 32, name: "Métodos de diagnóstico clínico", semester: 5, prerequisites: [17, 18], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Semiología II (17), Integrado de patología morfofuncional II (18) [cite: 38]
     [cite_start]{ id: 33, name: "Medicina aplicada I", semester: 5, prerequisites: [27, 28], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Farmacología II (27), Salud basada en la evidencia (28) [cite: 54]
     [cite_start]{ id: 34, name: "Electivo 2", semester: 5, prerequisites: [], area: "Electiva", approved: false, grade: null, description: "" }, // [cite: 70]

     // CICLO 2 - Semestre 6 
 [cite_start]    { id: 35, name: "Medicina interna II", semester: 6, prerequisites: [30, 32], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Medicina interna I (30), Métodos de diagnóstico clínico (32) [cite: 33]
     [cite_start]{ id: 36, name: "Neurología", semester: 6, prerequisites: [20, 32], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Neurociencias (20), Métodos de diagnóstico clínico (32) [cite: 59]
     [cite_start]{ id: 37, name: "Traumatología", semester: 6, prerequisites: [31, 32], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Cirugía (31), Métodos de diagnóstico clínico (32) [cite: 60]
     [cite_start]{ id: 38, name: "Medicina aplicada II", semester: 6, prerequisites: [33], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Medicina aplicada I (33) [cite: 55]
     [cite_start]{ id: 39, name: "Gestión en sistemas de salud", semester: 6, prerequisites: [22, 28], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Salud pública y epidemiología (22), Salud basada en la evidencia (28) [cite: 76]
     [cite_start]{ id: 40, name: "Electivo 3", semester: 6, prerequisites: [], area: "Electiva", approved: false, grade: null, description: "" }, // [cite: 71]

     // CICLO 2 - Semestre 7 
 [cite_start]    { id: 41, name: "Pediatría, traumatología y cirugía infantil", semester: 7, prerequisites: [35, 37], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Medicina interna II (35), Traumatología (37) [cite: 61]
     [cite_start]{ id: 42, name: "Ginecología y obstetricia", semester: 7, prerequisites: [35], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Medicina interna II (35) [cite: 62]
     [cite_start]{ id: 43, name: "Psiquiatría Infanto-juvenil y del adulto I", semester: 7, prerequisites: [36], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Neurología (36) [cite: 81]
     [cite_start]{ id: 44, name: "Especialidades médicas I", semester: 7, prerequisites: [35, 38], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Medicina interna II (35), Medicina aplicada II (38) [cite: 65]
     [cite_start]{ id: 45, name: "Bioética", semester: 7, prerequisites: [], area: "Básica", approved: false, grade: null, description: "" }, // [cite: 74]
     [cite_start]{ id: 46, name: "Electivo 4", semester: 7, prerequisites: [], area: "Electiva", approved: false, grade: null, description: "" }, // [cite: 72]

     // CICLO 2 - Semestre 8 
 [cite_start]    { id: 47, name: "Especialidades médicas II", semester: 8, prerequisites: [44], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Especialidades médicas I (44) [cite: 66]
     [cite_start]{ id: 48, name: "Psiquiatría infanto-juvenil y del adulto II", semester: 8, prerequisites: [43], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Psiquiatría Infanto-juvenil y del adulto I (43) [cite: 82]
     [cite_start]{ id: 49, name: "Medicina legal", semester: 8, prerequisites: [35, 38], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Medicina interna II (35), Medicina aplicada II (38) [cite: 77]
     [cite_start]{ id: 50, name: "Oncología y cuidados paliativos", semester: 8, prerequisites: [35, 38], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Medicina interna II (35), Medicina aplicada II (38) [cite: 87]
     [cite_start]{ id: 51, name: "Inteligencia artificial aplicada a la salud", semester: 8, prerequisites: [16], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Métodos de Investigación en salud y bioestadística aplicada (16) [cite: 88, 89]
     [cite_start]{ id: 52, name: "Electivo 5", semester: 8, prerequisites: [], area: "Electiva", approved: false, grade: null, description: "" }, // [cite: 73]

     // CICLO 2 - Semestre 9 (Internados) 
 [cite_start]    { id: 53, name: "Internado de medicina interna", semester: 9, prerequisites: [35], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Medicina interna II (35) [cite: 56]
     [cite_start]{ id: 54, name: "Internado de pediatría", semester: 9, prerequisites: [41], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Pediatría, traumatología y cirugía infantil (41) [cite: 63]
     [cite_start]{ id: 55, name: "Internado de cirugía", semester: 9, prerequisites: [31, 37], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Cirugía (31), Traumatología (37) [cite: 64]
     [cite_start]{ id: 56, name: "Especialidades médicas III", semester: 9, prerequisites: [47], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Especialidades médicas II (47) [cite: 78]

     // CICLO 2 - Semestre 10 (Internados) 
 [cite_start]    { id: 57, name: "Internado de atención primaria", semester: 10, prerequisites: [24], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Atención Primaria y alta prevalencia (24) [cite: 57, 58]
     [cite_start]{ id: 58, name: "Internado de psiquiatría", semester: 10, prerequisites: [48], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Psiquiatría infanto-juvenil y del adulto II (48) [cite: 79]
     [cite_start]{ id: 59, name: "Internado de urgencia", semester: 10, prerequisites: [35, 38], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Medicina interna II (35), Medicina aplicada II (38) [cite: 80]
     [cite_start]{ id: 60, name: "Internado de salud en persona mayor", semester: 10, prerequisites: [47], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Especialidades médicas II (47) [cite: 83, 84]
     [cite_start]{ id: 61, name: "Internado de obstetricia y ginecología", semester: 10, prerequisites: [42], area: "Disciplinar", approved: false, grade: null, description: "" }, // Prereq: Ginecología y obstetricia (42) [cite: 85, 86]
     [cite_start]{ id: 62, name: "Internado electivo I", semester: 10, prerequisites: [], area: "Electiva", approved: false, grade: null, description: "" }, // [cite: 94]

     // Semestre 11 (LICENCIADO EN MEDICINA) 
 [cite_start]    { id: 63, name: "Internado electivo II", semester: 11, prerequisites: [62], area: "Electiva", approved: false, grade: null, description: "" }, // Prereq: Internado electivo I (62) [cite: 95]

     // Semestre 12 
 [cite_start]    { id: 64, name: "Internado electivo III", semester: 12, prerequisites: [63], area: "Electiva", approved: false, grade: null, description: "" }, // Prereq: Internado electivo II (63) [cite: 96, 97]

     // Semestre 13 
 [cite_start]    { id: 65, name: "Integración para la práctica profesional", semester: 13, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "" }, // [cite: 98]
 ];
