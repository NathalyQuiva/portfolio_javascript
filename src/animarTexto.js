const animarTexto = (elemento) => { 
    const nroLetras = elemento.dataset.texto.length;
    const cursor = elemento.querySelector('.hero__cursor');
    cursor.classList.add('hero__cursor--visible');
    
    for (let i = 0; i < nroLetras; i++) {
        console.log(elemento.dataset.texto[i]);
    }

};

export default animarTexto;