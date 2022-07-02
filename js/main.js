// Menu Hamburguesa
const iconMenu = document.querySelector('#icono-menu'),
menu = document.querySelector('#menu');

iconMenu.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
})

// DarkMode
const btnSwitch = document.querySelector('#switch');
btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('press');
});