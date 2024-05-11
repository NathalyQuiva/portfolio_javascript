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
