let aprobados = new Set(JSON.parse(localStorage.getItem("aprobados")) || []);
let modoOscuro = localStorage.getItem("modoOscuro") === "true";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("malla-container");
  const modoBtn = document.getElementById("modo-btn");
  const barra = document.getElementById("barra-progreso");
  const texto = document.getElementById("texto-progreso");

  if (modoOscuro) document.body.classList.add("oscuro");

  modoBtn.onclick = () => {
    document.body.classList.toggle("oscuro");
    modoOscuro = document.body.classList.contains("oscuro");
    localStorage.setItem("modoOscuro", modoOscuro);
  };

  const total = ramos.length;

  function puedeTomar(r) {
    return r.prerequisitos.every(pr => aprobados.has(pr));
  }

  function actualizarProgreso() {
    const porcentaje = Math.round((aprobados.size / total) * 100);
    barra.style.width = `${porcentaje}%`;
    texto.textContent = `${porcentaje}% Avance`;
  }

  function render() {
    container.innerHTML = "";
    const porSemestre = {};

    ramos.forEach(r => {
      if (!porSemestre[r.semestre]) porSemestre[r.semestre] = [];
      porSemestre[r.semestre].push(r);
    });

    for (const semestre in porSemestre) {
      const section = document.createElement("section");
      section.className = "semestre";
      const h2 = document.createElement("h2");
      h2.textContent = `Semestre ${semestre}`;
      section.appendChild(h2);

      porSemestre[semestre].forEach(ramo => {
        const div = document.createElement("div");
        div.className = "ramo";
        div.title = ramo.nombre;
        if (aprobados.has(ramo.id)) {
          div.classList.add("aprobado");
        } else if (puedeTomar(ramo)) {
          div.classList.add("disponible");
        } else {
          div.classList.add("bloqueado");
        }

        div.textContent = ramo.nombre;
        div.addEventListener("click", () => {
          if (!puedeTomar(ramo) && !aprobados.has(ramo.id)) return;
          if (aprobados.has(ramo.id)) {
            aprobados.delete(ramo.id);
          } else {
            aprobados.add(ramo.id);
          }
          localStorage.setItem("aprobados", JSON.stringify([...aprobados]));
          render();
          actualizarProgreso();
        });

        section.appendChild(div);
      });

      container.appendChild(section);
    }

    actualizarProgreso();
  }

  render();
});
