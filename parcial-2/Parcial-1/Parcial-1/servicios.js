function crearServicio({titulo, descripcion,}) {
    return `
        <div class="servicio">
            <h3>${titulo}</h3>
            <p>${descripcion}</p>
        </div>
    `;
}

function crearModal() {
    return `
        <div class="contenedor-modal">
            <div class="modal">
                <h2>Bienvenido</h2>
                <button id="botton-cerrar">Cerrar</button>
            </div>
        </div>
    `;
}

function crearServicioConObjetos({titulo, descripcion}) {
    const contenedorServicio = document.createElement('div');
    const parrafo = document.createElement('p');
    parrafo.innerText = descripcion;
    const heading = document.createElement('h3');
    heading.innerText = titulo;
    contenedorServicio.appendChild(heading);
    contenedorServicio.appendChild(parrafo);
    contenedorServicio.classList.add("servicio");
    return contenedorServicio;
}

const data = [
    {titulo: "Escuela de Fútbol", descripcion: "Inscribe a tus hijos en la escuela de fútbol del club y desarrolla sus habilidades deportivas"},
    {titulo: "Membresía", descripcion: "Únete como socio o miembro del club para obtener beneficios exclusivos y acceso a eventos especiales"},
    {titulo: "Eventos y Experiencias VIP", descripcion: "Obtén entradas VIP y paquetes exclusivos para disfrutar de los partidos y eventos de manera especial"},
    {titulo: "Campañas Sociales y Comunitarias", descripcion: "Participa en las actividades y programas que el club promueve en la comunidad"},
    {titulo: "Servicios de Fanáticos: Venta de Entradas", descripcion: "DescripcióAdquiere boletos para los partidos en línea o en las taquillas del estadio"},
    {titulo: "Acceso a Información en Línea", descripcion: "Accede a información actualizada sobre el equipo, jugadores, estadísticas y más a través de la plataforma en línea del club"},
    
];

const contenedor = document.querySelector('.contenedor-servicios');


function cargarServicios(){
    for(let servicio of data) {
        const { descripcion } = servicio;
        console.log(descripcion);
        const servicioHtml = crearServicioConObjetos(servicio);
        contenedor.appendChild(servicioHtml);
        //contenedor.insertAdjacentHTML('beforeend', servicioHtml);
    }
    
    document.body.insertAdjacentHTML('beforeend', crearModal());
    const botonCerrar = document.getElementById("botton-cerrar");
    const modal = document.querySelector(".contenedor-modal");
    botonCerrar.addEventListener('click', () => modal.remove());
    

}
export{cargarServicios};
