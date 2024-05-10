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