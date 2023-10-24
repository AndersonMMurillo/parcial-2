function cargarColaboradores(){
    document.addEventListener('DOMContentLoaded', function () 
{
    function crearColaboradores({ nombre, cargo, imagen }) {
        return `
            <div class="Colaboradores">
                <h3>${nombre}</h3>
                <p>${cargo}</p>
                <img src="imagenes/${imagen}" alt="${nombre}">
            </div>
        `;
    }

    const colaboradoresData = [
        { nombre: "Mauricio Navarro", cargo: "Presidente", imagen: "presidente.webp" },
        { nombre: "René Higuita", cargo: "Líder Institucional Ciudad Deportiva", imagen: "líder-Instituciona.webp" },
        { nombre: "Francisco Nájera", cargo: "Asistente Técnico", imagen: "Asistente .webp" }
    ];

    const colaboradoresContainer = document.querySelector('#colaboradores-container');

    colaboradoresData.forEach(colaborador => {
        const colaboradorHtml = crearColaboradores(colaborador);
        colaboradoresContainer.insertAdjacentHTML('beforeend', colaboradorHtml);
    });
});

}

export{cargarColaboradores};