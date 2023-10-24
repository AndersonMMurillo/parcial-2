function crearFooter() {
    return `
        <div class="footer-wrapper">
            <div class="Footer">
                <div class="flecha">
                    <a href="#seccion-uno">
                        <button>
                            <img src="imagenes/FlechaUp.webp" alt="Flecha hacia arriba">
                            Subir
                        </button>
                    </a>
                </div>
                <div class="copyright">
                    2023 Club Atlético Nacional. Todos los contenidos de este Sitio (Incluyendo, pero no limitado a, texto, logotipos, contenido, fotografías, audio, botones, nombres comerciales y vídeo) están sujetos a derechos de propiedad por las leyes de Derechos de Autor y demás Leyes relativas Internacionales a Androidphoria y de terceros titulares de los mismos que han autorizado debidamente su inclusión. En ningún caso se entenderá que se concede licencia alguna o se efectúa renuncia, transmisión, cesión total o parcial de dichos derechos ni se confiere ningún derecho, y en especial, de alteración, explotación, reproducción, distribución o comunicación pública sobre dichos contenido sin la previa autorización expresa de Androidphoria o de los titulares correspondientes. El uso de imágenes, fragmentos de videos y demás material que sea objeto de protección de los derechos de autor, será exclusivamente para fines educativos e informativos, y cualquier uso distinto como el lucro, reproducción, edición o modificación, será perseguido y sancionado por el respectivo titular de los Derechos de Autor.
                </div>
            </div>
        </div>
    `;
}

function cargarFooter(){
    const footerHtml = crearFooter();
    const seccionCuatro = document.querySelector('.seccion-Cuatro');
    seccionCuatro.insertAdjacentHTML('beforeend', footerHtml); 
}

export{cargarFooter};