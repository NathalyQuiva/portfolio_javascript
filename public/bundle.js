'use strict';

const animarTexto = (elemento) => { 
    const nroLetras = elemento.dataset.texto.length;
    const cursor = elemento.querySelector('.hero__cursor');
    cursor.classList.add('hero__cursor--visible');
    
    for (let i = 0; i < nroLetras; i++) {
        console.log(elemento.dataset.texto[i]);
    }

};

window.addEventListener('load', () => {
    const texto = document.querySelector(".hero__titulo--uno");
    animarTexto(texto);
});
//# sourceMappingURL=bundle.js.map
