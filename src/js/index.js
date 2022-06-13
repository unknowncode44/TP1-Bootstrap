new fullpage('#fullpage', {
    autoscrolling: true,
    scrollHorizontally: true,
    parallax: true,
    sectionsColor: ['', '', 'whitesmoke', '#f2f2f2'],
    anchors: ['home', 'products', 'services', 'about'],

})

function stars() {
    let count = 40; // definimos la cantidad de estrellas

    // elegimos la clase que representara el espacio 
    let scene = document.querySelector('.header-custom-section');
    let i = 0 // definimos un item acumulable

    // ## Este while va a crear estrellas que van a aparecer en 
    // distintas ubicaciones a lo largo de la pantalla

    while (i < count) { // va a crear la misma cantidad que 'count'

        // creamos el elemento que sera una simple estrella
        let star = document.createElement('i');
        // a lo largo del ancho de la pantalla
        let x = Math.floor(Math.random() * window.innerWidth * 1.5);

        // duracion del efecto
        let duration = Math.random() * 1;
        // 
        let h = Math.random() * 70;

        //## Definimos un estilo para el elemento i

        // para ver distintas ubicaciones
        star.style.left = x + 'px';
        // el ancho siempre sera 1px
        star.style.width = 2 + 'px';
        // el alto sera random
        star.style.height = h + 'px';
        // asignamos valor de duracion al atributo animationDuration
        star.style.animationDuration = duration + 's'



        // embebemos el elemento i que creamos dentro de scene.
        scene.appendChild(star)
            // aumentamos uno al contador para completar un ciclo
        i++

    }

}

function getScreenSize(){
    let width  = window.screen.width
    let height = window.screen.height

    console.log(`Ancho: ${width} x Alto: ${height}`);
}

function resize(){
    let height = 20
    let accItem = document.querySelector(".li-custom-list")

    accItem.style.height = height + "px !important";
}

stars();
getScreenSize();


resize()