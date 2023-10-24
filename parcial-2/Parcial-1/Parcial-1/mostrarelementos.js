function mostrar() {
    let modal = document.getElementById('modal');
    let aceptar = document.getElementById('aceptar');
    let cancelar = document.getElementById('cancelar');
   

    modal.style.display = 'block';

    const navbarLinks = document.querySelectorAll('.navbar a.link');
    const seccionDos = document.getElementById('seccion-dos');
    const seccionTres = document.getElementById('seccion-tres');
    const seccionCuatro = document.getElementById('seccion-Cuatro');
    
    navbarLinks.forEach(link => {
        link.style.display = 'none';
    });


    document.getElementById('seccion-dos').style.display = 'none'; 
    document.getElementById('seccion-tres').style.display = 'none';
    document.getElementById('seccion-Cuatro').style.display = 'none';
    

    aceptar.addEventListener('click', function() {
        modal.style.display = 'none';
       
        navbarLinks.forEach(link => {
            link.style.display = 'inline-block';
        });

        seccionDos.style.display = 'block';
        seccionTres.style.display = 'block';
        seccionCuatro.style.display = 'block';
        

     
        document.getElementById('seccion-dos').style.display = 'block'; 
        document.getElementById('seccion-Cuatro').style.display = 'block';
        document.getElementById('ver-mas').style.display = 'none';

    });

    cancelar.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
   
}

export{mostrar};





