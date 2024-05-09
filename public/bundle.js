'use strict';

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

window.addEventListener('load', async() => {
    await animarTexto(document.querySelector(".hero__titulo--uno"));
    await animarTexto(document.querySelector(".hero__titulo--dos"));
});
//# sourceMappingURL=bundle.js.map
