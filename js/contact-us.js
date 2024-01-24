

const span1058 = document.getElementById('text');

let textos = ["", "Agencia de marketing.", "Desarrollo personalizado.", "Proyecto de BI.", "Consultoría tecnológica."];
let indexTexto = 0;
let indexChar = 0;

function escribirTexto() {
    if (indexTexto < textos.length) {
        const textoActual = textos[indexTexto];
        const tiempoInicioSiguienteTexto = (indexTexto === 0 || textoActual === "") ? 0 : 100;

        if (indexChar < textoActual.length) {
            span1058.textContent += textoActual.charAt(indexChar);
            indexChar++;
            setTimeout(escribirTexto, tiempoInicioSiguienteTexto);
        } else {
            // El texto actual ha sido completamente escrito
            if (indexTexto < textos.length - 1) {
                eliminarTexto()
            } else {
                // Si es el último texto, muestra el cursor directamente
                mostrarCursor();
            }
        }
    }
}



function eliminarTexto() {
    if (span1058.textContent.length > 0) {
        span1058.textContent = span1058.textContent.slice(0, -1);

        // Si es el primer texto, reduce el tiempo de espera
        const tiempoEspera = (indexTexto === 0) ? 10 : 80;

        setTimeout(eliminarTexto, tiempoEspera);
    } else {
        // El texto ha sido completamente eliminado, ahora puedes pasar al siguiente texto
        indexTexto++;
        indexChar = 0;

        // Si es el primer texto, reduce el tiempo de espera antes de iniciar el siguiente
        const tiempoInicioSiguienteTexto = (indexTexto === 1) ? 0 : 200;

        setTimeout(escribirTexto, tiempoInicioSiguienteTexto);
    }
}



function mostrarCursor() {
    // Muestra el cursor intermitente
    const cursorSpan = document.createElement('span');
    cursorSpan.className = 'style-1059';
    cursorSpan.id = 'cursor';
    cursorSpan.textContent = '|';

    // Agrega el cursorSpan al final del contenido de span1058
    span1058.appendChild(cursorSpan);

    setInterval(() => {
        cursorSpan.style.opacity = (cursorSpan.style.opacity === '0') ? '1' : '0';
    }, 500);
}

// Inicia el efecto de escribir texto
escribirTexto();




//


hideAllContent();

// Mostrar el contenido de la primera sección al principio
toggleContent('1');

const seccion1 = document.getElementById('seccion1');
const seccion2 = document.getElementById('seccion2');
const seccion3 = document.getElementById('seccion3');
const seccion4 = document.getElementById('seccion4');
const seccion5 = document.getElementById('seccion5');
const seccion6 = document.getElementById('seccion6');

seccion1.addEventListener('click', function() {
    toggleContent('1');
    hideContent('2');
    hideContent('3');
    hideContent('4');
    hideContent('5');
    hideContent('6');
});

seccion2.addEventListener('click', function() {
    toggleContent('2');
    hideContent('1');
    hideContent('3');
    hideContent('4');
    hideContent('5');
    hideContent('6');
});

seccion3.addEventListener('click', function() {
    toggleContent('3');
    hideContent('1');
    hideContent('2');
    hideContent('4');
    hideContent('5');
    hideContent('6');
});

seccion4.addEventListener('click', function() {
    toggleContent('4');
    hideContent('1');
    hideContent('2');
    hideContent('3');
    hideContent('5');
    hideContent('6');
});

seccion5.addEventListener('click', function() {
    toggleContent('5');
    hideContent('1');
    hideContent('2');
    hideContent('3');
    hideContent('4');
    hideContent('6');
});

seccion6.addEventListener('click', function() {
    toggleContent('6');
    hideContent('1');
    hideContent('2');
    hideContent('3');
    hideContent('4');
    hideContent('5');
});

function hideAllContent() {
 // takes every id starts with string 'seccion'
    const contenidos = document.querySelectorAll('[id^="seccion"][id$="-contenido"]');
    contenidos.forEach(function(contenido) {
        contenido.style.display = 'none';
    });
}


function hideContent(numeroSeccion) {
    const contenido = document.getElementById('seccion' + numeroSeccion + '-contenido');
    if (contenido) {
        contenido.style.display = 'none';
    }
}

function toggleContent(numeroSeccion) {
    const contenido = document.getElementById('seccion' + numeroSeccion + '-contenido');

    if (contenido) {
        contenido.style.display = 'block';
    }
}


// ...



