const buttons = document.querySelectorAll('[data-action="abrir-ventana-correo"]');
const mailWindows = document.getElementById('ventana-correo');
const closeButton = document.querySelectorAll('[data-action="cerrar-ventana"]');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        mailWindows.classList.add('ventana--active')
    });
});

closeButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        mailWindows.classList.remove('ventana--active')
    });
});

