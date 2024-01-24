// Datos para la segunda parte
var valoresIniciales = {
    'Marketing y Publicidad': [
        'SEO y SEM',
        'Social Media Marketing',
        'Content Marketing',
        'Publicidad y Promoción'
    ],
    'Analítica y Estrategia': [
        'Analítica y Datos',
        'Estrategia Digital y de Medios'
    ],
    'Inteligencia Artificial y Tecnologías Avanzadas': [
        'Aplicaciones de Inteligencia Artificial',
        'Análisis Avanzado y Big Data',
        'Consultoría y Estrategia en IA',
        'Desarrollo y Gestión de Chatbots',
        'Aplicaciones de Modelos de Lenguaje',
        'Visión por Computadora y OCR'
    ],
    'Tecnología y Desarrollo': [
        'Desarrollo Web y Móvil',
        'App móvil',
    ],
    'Herramientas e Integración': [
        'ERP, CRM y Customer Service',
        'DevOps y Automatización',
    ],
    // 
    'Diseño y Branding': [
        'Diseño Gráfico y Digital',
        'Diseño Publicitario y Promocional carteles'
    ],
    // 
    'Publicidad y Comunicación': [
        'Comunicación Corporativa',
        'Publicidad Específica',
        'Contenido y Escritura'
    ],
    'Due Dilligence (Debida diligencia)': [
        'Descarbonización',
        'Tecnológica',
        'Gobierno'
    ]
};

// Datos para la tercera parte
var valoresSecundarios = {
    'Marketing y Publicidad': {
        'SEO y SEM': [
            { texto: 'Amazon SEO', url: 'https://www.ejemplo1.com' },
            { texto: 'Google Adwords', url: 'https://www.ejemplo2.com' },
            { texto: 'Marketplace SEO', url: 'https://www.ejemplo3.com' },
            { texto: 'SEO', url: 'https://www.ejemplo3.com' },
            { texto: 'SEO Copywriting', url: 'https://www.ejemplo3.com' },
            { texto: 'SEO Técnico', url: 'https://www.ejemplo3.com' }
        ],
        'Social Media Marketing': [
            { texto: 'Community Building', url: 'https://www.ejemplo4.com' },
            { texto: 'Community Management', url: 'https://www.ejemplo5.com' },
            { texto: 'Facebook Advertising', url: 'https://www.ejemplo6.com' },
            { texto: 'Facebook Marketing', url: 'https://www.ejemplo5.com' },
            { texto: 'Instagram Marketing', url: 'https://www.ejemplo4.com' },
            { texto: 'Publicidad Snapchat', url: 'https://www.ejemplo6.com' },
            { texto: 'Publicidad Twitter', url: 'https://www.ejemplo6.com' },
        ],
        'Content Marketing': [
            { texto: 'AI Marketing', url: 'https://www.ejemplo4.com' },
            { texto: 'E-mailing', url: 'https://www.ejemplo5.com' },
            { texto: 'Estrategia de contenidos', url: 'https://www.ejemplo6.com' },
            { texto: 'Generacion de Contenidos', url: 'https://www.ejemplo5.com' },
            { texto: 'Storytelling', url: 'https://www.ejemplo6.com' },
        ],
        'Publicidad y Promoción': [
            { texto: 'Marketing Directo', url: 'https://www.ejemplo4.com' },
            { texto: 'Marketing Viral', url: 'https://www.ejemplo5.com' },
            { texto: 'Performance Marketing', url: 'https://www.ejemplo6.com' },
            { texto: 'Publicidad 360º', url: 'https://www.ejemplo5.com' },
            { texto: 'Publicidad interactiva', url: 'https://www.ejemplo6.com' },
            { texto: 'Publicidad nativa', url: 'https://www.ejemplo6.com' },
            { texto: 'Publicidad online', url: 'https://www.ejemplo6.com' },
        ]
    },
    'Analítica y Estrategia': {
        'Analítica y Datos': [
            { texto: 'Analítica Web/Big data', url: 'https://www.ejemploB.com' },
            { texto: 'Consultoría de Datos', url: 'https://www.ejemploC.com' },
            { texto: 'Data Reporting', url: 'https://www.ejemploA.com' },
            { texto: 'Optimización de la tasa de conversión', url: 'https://www.ejemploB.com' },
            { texto: 'Optimización De Roi', url: 'https://www.ejemploC.com' },
            { texto: 'Asesoría sobre analítica de empresa', url: 'https://www.ejemploB.com' },
            { texto: 'Consultoría de analítica', url: 'https://www.ejemploA.com' },
            { texto: 'Inteligencia de Negocio (Business Intelligence)', url: 'https://www.ejemploC.com' },
            { texto: 'Análisis Predictivo', url: 'https://www.ejemploA.com' },
            { texto: 'Minería de Datos', url: 'https://www.ejemploB.com' },
            { texto: 'Google analytics', url: 'https://www.ejemploC.com' },
            { texto: 'Asesoría sobre analítica y datos', url: 'https://www.ejemploC.com' },
            { texto: 'Consultoría sobre analítica y datos', url: 'https://www.ejemploA.com' },
        ],
        'Estrategia Digital y de Medios': [
            { texto: 'Estrategia digital', url: 'https://www.ejemploD.com' },
            { texto: 'Growth Hacking', url: 'https://www.ejemploE.com' },
            { texto: 'Marketing Automation', url: 'https://www.ejemploF.com' },
            { texto: 'Pay-per-click', url: 'https://www.ejemploD.com' },
            { texto: 'Planificación de medios', url: 'https://www.ejemploD.com' },
            { texto: 'Estrategia de medios sociales', url: 'https://www.ejemploE.com' },
            { texto: 'Estrategia de contenido multicanal', url: 'https://www.ejemploF.com' },
        ]
    },
    'Inteligencia Artificial y Tecnologías Avanzadas': {
        'Aplicaciones de Inteligencia Artificial': [
            { texto: 'Desarrollo de soluciones basadas en IA', url: 'https://www.ejemploJ.com' },
            { texto: 'Machine Learning y Modelos Predictivos', url: 'https://www.ejemploK.com' },
            { texto: 'Automatización de Procesos con IA (RPA)', url: 'https://www.ejemploL.com' },
            { texto: 'Reconocimiento de Voz y Procesamiento del Lenguaje Natural (NLP)', url: 'https://www.ejemploJ.com' },
            { texto: 'Visión por Computadora y Análisis de Imágenes', url: 'https://www.ejemploK.com' },
            { texto: 'Asesoría sobre inteligencia artificial', url: 'https://www.ejemploL.com' },
            { texto: 'Consultoría sobre inteligencia artificial', url: 'https://www.ejemploL.com' },
        ],
        'Análisis Avanzado y Big Data': [
            { texto: 'Análisis de grandes volúmenes de datos (Big Data)', url: 'https://www.ejemploM.com' },
            { texto: 'Almacenamiento y gestión de datos a gran escala', url: 'https://www.ejemploN.com' },
            { texto: 'Herramientas de visualización de datos avanzada', url: 'https://www.ejemploM.com' },
            { texto: 'Asesoría sobre gestión de Big Data', url: 'https://www.ejemploN.com' },
            { texto: 'Consultoría sobre gestión de Big Data', url: 'https://www.ejemploO.com' }
        ],
        'Consultoría y Estrategia en IA': [
            { texto: 'Consultoría estratégica en IA', url: 'https://www.ejemploP.com' },
            { texto: 'Diseño de proyectos de IA', url: 'https://www.ejemploQ.com' },
            { texto: 'Integración de IA en estrategias de negocio', url: 'https://www.ejemploQ.com' },
            { texto: 'Evaluación y mitigación de riesgos en proyectos de IA', url: 'https://www.ejemploR.com' }
        ],
        'Desarrollo y Gestión de Chatbots': [
            { texto: 'Diseño y Desarrollo de Chatbots - Enlace 1', url: 'https://www.ejemploP.com' },
            { texto: 'Integración de Chatbots en CRM y plataformas de servicio al cliente', url: 'https://www.ejemploQ.com' },
            { texto: 'Mantenimiento y Optimización de Chatbots', url: 'https://www.ejemploR.com' }
        ],
        'Aplicaciones de Modelos de Lenguaje': [
            { texto: 'Desarrollo y personalización de Modelos de Lenguaje (como GPT-3, GPT-4)', url: 'https://www.ejemploP.com' },
            { texto: 'Integración de Modelos de Lenguaje en plataformas existentes', url: 'https://www.ejemploQ.com' },
            { texto: 'Asesoramiento en el uso ético y efectivo de Modelos de Lenguaje', url: 'https://www.ejemploR.com' } 
        ],
        'Visión por Computadora y OCR': [
            { texto: 'Desarrollo de proyectos de visión por computadora', url: 'https://www.ejemploP.com' },
            { texto: 'Soluciones personalizadas de OCR (Reconocimiento Óptico de Caracteres)', url: 'https://www.ejemploQ.com' },
            { texto: 'Integración de tecnologías de visión por computadora en procesos empresariales', url: 'https://www.ejemploQ.com' },
            { texto: 'Consultoría en proyectos de visión por computadora y OCR', url: 'https://www.ejemploR.com' }
        ]
    },
    'Tecnología y Desarrollo': {
        'Desarrollo Web y Móvil': [
            { texto: 'Desarrollo Web', url: 'https://www.ejemploJ.com' },
            { texto: 'Aplicación Web', url: 'https://www.ejemploK.com' },
            { texto: 'Desarrollo de CMS', url: 'https://www.ejemploL.com' },
            { texto: 'Desarrollo de Plugin WordPress', url: 'https://www.ejemploL.com' },
            { texto: 'Desarrollo Drupal', url: 'https://www.ejemploJ.com' },
            { texto: 'Desarrollo Front End', url: 'https://www.ejemploK.com' },
            { texto: 'Desarrollo JavaScript', url: 'https://www.ejemploL.com' },
            { texto: 'Desarrollo jQuery', url: 'https://www.ejemploL.com' },
            { texto: 'Desarrollo Laravel', url: 'https://www.ejemploJ.com' },
            { texto: 'Desarrollo NodeJS', url: 'https://www.ejemploK.com' },
            { texto: 'Desarrollo PHP', url: 'https://www.ejemploL.com' },
            { texto: 'Desarrollo Prestashop', url: 'https://www.ejemploL.com' },
            { texto: 'Desarrollo Symfony', url: 'https://www.ejemploK.com' },
            { texto: 'Desarrollo WordPress', url: 'https://www.ejemploL.com' },
            { texto: 'Desarrollo Móvil y Aplicaciones', url: 'https://www.ejemploL.com' }
        ],
        'App móvil': [
            { texto: 'Desarrollo de Chatbot', url: 'https://www.ejemploM.com' },
            { texto: 'Desarrollo de React Native', url: 'https://www.ejemploN.com' },
            { texto: 'Desarrollo iOS', url: 'https://www.ejemploO.com' },
            { texto: 'Desarrollo Java', url: 'https://www.ejemploM.com' },
            { texto: 'Desarrollo Xamarin', url: 'https://www.ejemploN.com' }
        ]
    },
    'Herramientas e Integración': {
        'ERP, CRM y Customer Service': [
            { texto: 'CRM Hubspot', url: 'https://www.ejemploM.com' },
            { texto: 'Integración de Hubspot', url: 'https://www.ejemploN.com' },
            { texto: 'CRM', url: 'https://www.ejemploO.com' },
            { texto: 'ERP', url: 'https://www.ejemploM.com' },
            { texto: 'C Service', url: 'https://www.ejemploN.com' },
            { texto: 'Call center solutions', url: 'https://www.ejemploN.com' }
        ],
        'DevOps y Automatización': [
            { texto: 'DevOps', url: 'https://www.ejemploN.com' },
            { texto: 'Magento', url: 'https://www.ejemploN.com' }
        ]
    },
    'Diseño y Branding': {
        'Diseño Gráfico y Digital': [
            { texto: 'Diseño Corporativo', url: 'https://www.ejemploN.com' },
            { texto: 'Branding Corporativo', url: 'https://www.ejemploN.com' },
            { texto: 'Branding Digital', url: 'https://www.ejemploN.com' },
            { texto: 'Creación de Marca', url: 'https://www.ejemploN.com' },
            { texto: 'Diseño de la Identidad Corporativa', url: 'https://www.ejemploN.com' },
            { texto: 'Diseño de Marca', url: 'https://www.ejemploN.com' },
            { texto: 'Identidad de Marca', url: 'https://www.ejemploN.com' },
            { texto: 'Identidad Visual', url: 'https://www.ejemploN.com' },
            { texto: 'Imagen Corporativa', url: 'https://www.ejemploN.com' },
            { texto: 'Naming', url: 'https://www.ejemploN.com' },
            { texto: 'Rediseño Web', url: 'https://www.ejemploN.com' },
        ],
        'Diseño Publicitario y Promocional carteles': [
            { texto: 'Diseño de Flyers', url: 'https://www.ejemploN.com' },
            { texto: 'Diseño de Infografías', url: 'https://www.ejemploN.com' },
            { texto: 'Diseño de Packaging', url: 'https://www.ejemploN.com' },
            { texto: 'Diseño de tarjetas de presentación', url: 'https://www.ejemploN.com' },
            { texto: 'Empresa Diseno Industrial', url: 'https://www.ejemploN.com' },
            { texto: 'Empresa Grafica Publicitaria', url: 'https://www.ejemploN.com' },
            { texto: 'Empresa Publicidad Digital', url: 'https://www.ejemploN.com' }
        ]
    },
    'Publicidad y Comunicación': {
        'Comunicación Corporativa': [
            { texto: 'Comunicación', url: 'https://www.ejemploN.com' },
            { texto: 'Comunicación ambiental', url: 'https://www.ejemploN.com' },
            { texto: 'Comunicación de Crisis', url: 'https://www.ejemploN.com' },
            { texto: 'Relaciones Públicas (RRPP)', url: 'https://www.ejemploN.com' }
        ],
        'Publicidad Específica': [
            { texto: 'Marketing de Afiliación', url: 'https://www.ejemploN.com' },
            { texto: 'Marketing de Amazon', url: 'https://www.ejemploN.com' },
            { texto: 'Marketing integrado', url: 'https://www.ejemploN.com' },
            { texto: 'Marketing Interactivo', url: 'https://www.ejemploN.com' },
            { texto: 'Marketing Internacional', url: 'https://www.ejemploN.com' },
            { texto: 'Marketing Local', url: 'https://www.ejemploN.com' },
            { texto: 'Realidad virtual', url: 'https://www.ejemploN.com' },
            { texto: 'Remarketing', url: 'https://www.ejemploN.com' },
            { texto: 'Retail Marketing', url: 'https://www.ejemploN.com' },
        ],
        'Contenido y Escritura': [
            { texto: 'Redacción y Traducción', url: 'https://www.ejemploN.com' },
            { texto: 'Copywriting', url: 'https://www.ejemploN.com' },
            { texto: 'Servicios', url: 'https://www.ejemploN.com' }
        ]
    },
    'Due Dilligence (Debida diligencia)': {
        'Tecnológica': [
            { texto: 'Análisis de Huella de Carbono', url: 'https://www.ejemploN.com' },
            { texto: 'Análisis de Huella hídrica', url: 'https://www.ejemploN.com' }
        ],
        'Descarbonización': [

            { texto: 'Análisis de Sistemas y Redes', url: 'https://www.ejemploN.com' },
            { texto: 'Revisión de Arquitecturas Tecnológicas', url: 'https://www.ejemploN.com' },
            { texto: 'Seguridad de la Información', url: 'https://www.ejemploN.com' },
            { texto: 'Evaluación de Plataformas y Herramientas', url: 'https://www.ejemploN.com' },
            { texto: 'Revisión de Licencias de Software', url: 'https://www.ejemploN.com' },
            { texto: 'Planificación Estratégica IT', url: 'https://www.ejemploN.com' },
            { texto: 'Innovación y Transformación Digital', url: 'https://www.ejemploN.com' },
            { texto: 'Evaluación de Inversiones Tecnológicas', url: 'https://www.ejemploN.com' }
        ],
        'Gobierno': [
            { texto: 'Planificación Estratégica', url: 'https://www.ejemploN.com' },
            { texto: 'CopywPolíticas de Gobierno Corporativoriting', url: 'https://www.ejemploN.com' },
            { texto: 'Ética Empresarial y Cumplimiento', url: 'https://www.ejemploN.com' },
            { texto: 'Políticas de Diversidad', url: 'https://www.ejemploN.com' },
            { texto: 'Programas de Inclusión', url: 'https://www.ejemploN.com' },
            { texto: 'Capacitación en Diversidad y Sensibilización', url: 'https://www.ejemploN.com' }
        ]
    }

};
   

    // Función para actualizar la segunda parte (lista)
    function actualizarLista(opcion) {
        var lista = valoresIniciales[opcion];
        var listaHtml = '<ul>';
        for (var i = 0; i < lista.length; i++) {
            listaHtml += '<li style="height: 18px;" class="home_sans_serif">' + lista[i] + '</li>';
        }
        listaHtml += '</ul>';
        $('#parte2 ul').html(listaHtml);
    }

    // Función para actualizar la tercera parte (enlaces)
    function actualizarEnlaces(opcion, subopcion) {
        var enlaces = valoresSecundarios[opcion][subopcion];
        var enlacesHtml = '<ul>';
        for (var i = 0; i < enlaces.length; i++) {
                enlacesHtml += '<li  class="ptb-8 layout-row layout-align-start-center"><a style="color: black;" data-tf-size="70" data-tf-medium data-tf-popup="fBkZhmPl?service=' + enlaces[i].texto + '" class="text-secondary-900 small css-yr3vho home_sans_serif" >' + enlaces[i].texto + '</a></li>';
        }
        enlacesHtml += '</ul>';
        $('#parte3').html(enlacesHtml);

        if (window.tf) {
            window.tf.load();
        } else {
            var script = document.createElement('script');
            script.src = "//embed.typeform.com/next/embed.js";
            document.head.appendChild(script);
        }
    }


    // Agrega un event listener a cada elemento
    $('.flavio_box1sectionA').on('click', function () {
        // Elimina todas las flechas que puedan estar presentes
        $('.flavio_box1sectionA .arrow-icon').remove();

        // Restablece el contenido de todos los elementos
        $('.flavio_box1sectionA').each(function () {
            // Verifica si el elemento tiene contenido para evitar errores
            if ($(this).data("original-content")) {
                $(this).html($(this).data("original-content"));
            }
        });

        // Guarda el contenido original del elemento clicado
        const originalContent = $(this).html();
        $(this).data("original-content", originalContent);

        // Elimina el contenido actual
        $(this).empty();

        // Variables con el texto y el ícono deseado según el elemento clicado
        let text, icon;

        // Identifica el elemento clicado y asigna el texto y el ícono correspondientes
        const dataIndex = $(this).data("id");

        switch (dataIndex) {

            case 0:
                text = "Marketing y Publicidad";
                icon = "";
                break;
            case 1:
                text = "Analítica y Estrategia";
                icon = "";
                break;
            case 2:
                text = "Inteligencia Artificial y Tecnologías Avanzadas";
                icon = "";
                break;
            case 3:
                text = "Tecnología y Desarrollo";
                icon = "";
                break;
            case 4:
                text = "Herramientas e Integración";
                    icon = "";
                break;
            case 5:
                text = "Diseño y Branding";
                icon = "";
    
                break;
            case 6:
                text = "Publicidad y Comunicación";
                icon = "";
        
                break;
            case 7:
                text = "Due Dilligence (Debida diligencia)";
                icon = "";
        
                break;
            default:
                text = "Texto de ejemplo";
                icon = "";
        } 

        // Crea un elemento SPAN para el texto
        const textSpan = document.createElement("span");
        text = text + icon;
        textSpan.textContent = text;


        // Create new image
        const arrowIcon = document.createElement("img");
        arrowIcon.src = "./img/right-arrow-list.png";
        arrowIcon.alt = "arrow icon";
        arrowIcon.setAttribute('class', 'myArrow');

        // Agrega el texto y el icono SVG al elemento
        $(this).append(textSpan);
        $(this).append(arrowIcon);

        // Actualiza las listas según la opción seleccionada
        actualizarLista(text);
        // Selecciona la primera subopción por defecto
        var primeraSubopcion = valoresIniciales[text][0];
        actualizarEnlaces(text, primeraSubopcion);

        $('#parte2 li:first-child').trigger('click');

    });



    $('#parte2').on('click', 'li', function () {
        // Obtiene la opción seleccionada en la primera parte
        var opcion = $('.flavio_box1sectionA span').text();

        // Obtiene la subopción seleccionada en la segunda parte
        var subopcion = $(this).text();


        // Elimina todas las flechas que puedan estar presentes en la segunda sección
        $('#parte2 .arrow-icon').remove();

        const myArrowIcon = document.createElement("img");
        myArrowIcon.src = "./img/right-arrow-list.png";
        myArrowIcon.alt = "arrow icon";
        myArrowIcon.setAttribute('class', 'myArrow');

        // Agrega la flecha al elemento clicado en la segunda sección
        var arrowIcon = $('<span class="arrow-icon"></span>');
        arrowIcon.append(myArrowIcon)
        $(this).append(arrowIcon);

        // Actualiza la tercera parte según la opción y subopción seleccionadas, y añade la flecha si es necesario
        actualizarEnlaces(opcion, subopcion, true);
    });


    $('.flavio_box1sectionA[data-id="0"]').trigger('click');

// input

const home_input = document.getElementById("home_input");
const home_btn_input = document.getElementById("home-search-cta-btn");

home_btn_input.addEventListener('click', () => {
     console.log("Hola!")
    if(home_input.value){
    const tfPopupValue = `fBkZhmPl?service='${home_input.value}'`;
    console.log(tfPopupValue);

    if (window.tf) {
        window.tf.createPopup(tfPopupValue).open();
    } else {
        var script = document.createElement('script');
        script.src = "//embed.typeform.com/next/embed.js";
        document.head.appendChild(script);

        window.tf.createPopup(tfPopupValue).open(); 
    };
   };
});




// cards 

const cards = document.querySelectorAll(".x_card");
let currentIndex = 0;

function showCard(index) {
    cards.forEach((card, i) => {
        card.style.visibility = i >= index && i < index + 3 ? "visible" : "hidden";
        card.style.position = i >= index && i < index + 3 ? "relative" : "absolute";
    });
}

function navigate(direction) {
    if (direction === "next" && currentIndex < cards.length - 3) {
        currentIndex++;
    } else if (direction === "prev" && currentIndex > 0) {
        currentIndex--;
    }

    showCard(currentIndex);
}

document.getElementById("nextButton").addEventListener("click", () => {
    navigate("next");
});

document.getElementById("prevButton").addEventListener("click", () => {
    navigate("prev");
});

// Mostrar las primeras 3 tarjetas al cargar la página
showCard(currentIndex);



