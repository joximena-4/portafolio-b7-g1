// CRUD
// Crear Leer Actualizar Borrar

// alert("Hola Mundo! <3");

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

// Usar el punto es para llamar a una propiedad o a una acción del objeto.
// Acciones se distinguen por los paréntesis ()
typewriter
    .pauseFor(2500)
    .typeString('Johanna Ximena')
    .pauseFor(300)
    .deleteAll()
    .typeString('Biológa y Desarrolladora Frontend JR')
    .pauseFor(1000)
    .start();



let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
    loop: true,
    delay: 75,
});

// Usar el punto es para llamar a una propiedad o a una acción del objeto.
// Acciones se distinguen por los paréntesis ()
typewriterFrase
    .pauseFor(2500)
    .typeString('Si tú tienes este sueño... tú puedes.')
    .pauseFor(300)
    .deleteAll()
    .typeString('Katya Echazarreta')
    .pauseFor(1000)
    .start();