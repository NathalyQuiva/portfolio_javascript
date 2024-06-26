'use strict';

// "sass": "sass --watch --update --style=expanded sass/index.scss:public/bundle.css",

const animarTexto = (elemento) => { 
    const nroLetras = elemento.dataset.texto.length;
    const cursor = elemento.querySelector('.hero__cursor');
    cursor.classList.add('hero__cursor--visible');
    
    for (let i = 0; i < nroLetras; i++) {
        setTimeout(() => {
            const letra = elemento.dataset.texto[i];
            const etiquetaLetra = document.createElement('span');
            etiquetaLetra.append(letra);
            elemento.append(etiquetaLetra);
        }, 100 * i);
        
    }

    setTimeout(() => {
        const cursores = [...document.querySelector('.hero__header').querySelectorAll('.hero__cursor')];
        const cursorActual = cursores.indexOf(cursor);
        if (cursorActual < cursores.length - 1) {
            cursor.classList.remove("hero__cursor--visible");
        } else {
            cursor.classList.add("hero__cursor--active");
        }    }, nroLetras * 100);

    return new Promise((resolve) => setTimeout(resolve, nroLetras * 100));
};

const gallery = document.getElementById('trabajos');

const observer = new IntersectionObserver(
    (entries) => {
        if (entries[0].isIntersecting) {
            const works = document.querySelectorAll('.trabajos__imagenes a');
            works.forEach((work, index) => {
                setTimeout(() => {
                    work.classList.add('trabajos__trabajo--visible');
                }, 200 * index);
               
            });
        }
}, 
{
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5,
});

observer.observe(gallery);

const works = document.getElementById('trabajos');
const ventana = document.getElementById('ventana-trabajos');

const data = [
    {
        id: '1',
        title: 'Profinder',
        date: 'August 2023',
        description: 'It is a dating application that allows service provider users to publish their services and offer them within various categories in different areas of Latin America. Client users can consult these publications according to their area and establish contact with service providers to hire them.',
        website: 'https://profinder-client.vercel.app/',
        github: 'https://github.com/NathalyQuiva/profinder_services_application?tab=readme-ov-file'
    },
    {
        id: '2',
        title: 'Note App',
        date: 'January 2024',
        description: 'It is a Single Page Application about notes using the following technologies: React, Redux, Node, Express, and Sequelize',
        website: 'https://drive.google.com/file/d/1pS9UE11Q7Wl8S765wJTjjpbpRK-iIGRR/view',
        github: 'https://github.com/NathalyQuiva/app_notes?tab=readme-ov-file'
    },
    {
        id: '3',
        title: 'RESTful Api',
        date: 'February 2024',
        description: 'RESTful API developed about movies and users using Node.js, Express.js, Fetch API, and other tools to provide a streamlined API for performing various actions.',
        website: 'https://restful-api-movies-6.onrender.com/',
        github: 'https://github.com/NathalyQuiva/restful_api_movies'
    },
    {
        id: '4',
        title: 'Project Portfolio',
        date: 'May 2024',
        description: 'Website about my personal projects. Made using HTML5, Javascript, Rollup compiler, CSS, Sass compiler.',
        website: 'https://nathalyquiva.github.io/portfolio_javascript/',
        github: 'https://github.com/NathalyQuiva/portfolio_javascript'
    },
];

works.addEventListener('click', (event) => {
    event.preventDefault();

    const clickWork = event.target.closest('.trabajos__trabajo');

    if (clickWork) {
        const id = clickWork.dataset.id;
        const workFilter = data.filter((work)=> {
            if (work.id === id) {
                return work;
            }
        });
        const { title, date, description, website, github } = workFilter[0];
        ventana.querySelector('.ventana__titulo').innerText = title;
        ventana.querySelector('.ventana__fecha').innerText = date;
        ventana.querySelector('.ventana__parrafo').innerText = description;
        ventana.querySelector('.ventana__imagen').src = clickWork.querySelector('img').src;
        ventana.querySelector('.ventana__website').href = website;
        ventana.querySelector('.ventana__github').href = github;
        console.log(ventana.querySelector('.ventana__website').href,
        ventana.querySelector('.ventana__github').href);
        ventana.classList.add('ventana--active');
    } 
});

ventana.querySelector('button[data-action="cerrar-ventana"]').addEventListener('click', (event) => {
    event.preventDefault();
    ventana.classList.remove('ventana--active');
});

ventana.querySelector('.ventana__overlay').addEventListener('click', (event) => {
    event.preventDefault();
    const overlay = event.target.matches('.ventana__overlay');
    if (overlay) {
        ventana.classList.remove('ventana--active');
    }
});

const slider = document.getElementById('slider');

let sliderPress = false;
let initialDistance;
let scrollLeft;

const mouseDown = (e) => {
    sliderPress = true;

    initialDistance = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
};

const mouseMove = (e) => {
    if(!sliderPress) {
        return;
    } 

    const space = e.pageX - slider.offsetLeft;
    const distanceTraveled = space - initialDistance;

    slider.scrollLeft = scrollLeft - distanceTraveled;
};

const mouseUp = (e) => {
    sliderPress = false;
};

slider.addEventListener('mousedown', mouseDown);
slider.addEventListener('mousemove', mouseMove);
slider.addEventListener('mouseup', mouseUp);

const buttons = document.querySelectorAll('[data-action="abrir-ventana-correo"]');
const mailWindows = document.getElementById('ventana-correo');
const closeButton = document.querySelectorAll('[data-action="cerrar-ventana"]');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        mailWindows.classList.add('ventana--active');
    });
});

closeButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        mailWindows.classList.remove('ventana--active');
    });
});

window.addEventListener('load', async() => {
    await animarTexto(document.querySelector('.hero__titulo--uno'));
    await animarTexto(document.querySelector('.hero__titulo--dos'));

    document.querySelectorAll(".hero__burbuja")[0].classList.add('hero__burbuja--active-1');
    document.querySelectorAll(".hero__burbuja")[1].classList.add('hero__burbuja--active-2');
});
//# sourceMappingURL=bundle.js.map
