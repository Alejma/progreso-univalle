async function cargarMaterias() {
    const resp = await fetch('/api/materias');
    const materias = await resp.json();
    mostrarMateriasColumnas(materias);
}

function mostrarMateriasColumnas(materias) {
    // Organizar materias por semestre
    const semestres = {};
    let creditosTotales = 0;
    let creditosCompletados = 0;
    materias.forEach(m => {
        if (!semestres[m.semestre]) semestres[m.semestre] = [];
        semestres[m.semestre].push(m);
        creditosTotales += m.creditos;
        if (m.vista) creditosCompletados += m.creditos;
    });
    document.getElementById('creditos-totales').textContent = creditosTotales;
    document.getElementById('creditos-completados').textContent = creditosCompletados;

    const pensumDiv = document.getElementById('pensum-columnas');
    pensumDiv.innerHTML = '';
    const semestresOrdenados = Object.keys(semestres).sort((a, b) => a - b);
    semestresOrdenados.forEach(sem => {
        const columna = document.createElement('div');
        columna.className = 'columna-semestre';
        columna.innerHTML = `<h2>Semestre ${sem}</h2>`;
        semestres[sem].forEach(m => {
            const tarjeta = document.createElement('div');
            let areaClass = m.area ? `area-${m.area.replace(/ /g, "\\ ")}` : '';
            tarjeta.className = `tarjeta-materia ${m.vista ? 'materia-vista' : ''} ${areaClass}`;
            tarjeta.innerHTML = `
                <div class="cabecera-materia">
                    <input type="checkbox" class="checkbox-materia" ${m.vista ? 'checked' : ''}>
                    <span class="codigo">${m.codigo}</span>
                </div>
                <span class="nombre">${m.nombre}</span>
                <span class="creditos">Créditos: ${m.creditos}</span>
            `;
            // Manejar el checkbox
            const checkbox = tarjeta.querySelector('input[type="checkbox"]');
            checkbox.addEventListener('change', async function() {
                await fetch(`/api/materias/${m.codigo}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ vista: this.checked })
                });
                cargarMaterias();
            });
            columna.appendChild(tarjeta);
        });
        pensumDiv.appendChild(columna);
    });
}

document.addEventListener('DOMContentLoaded', cargarMaterias); 