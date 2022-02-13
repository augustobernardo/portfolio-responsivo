/* Abre e fecha menu lateral em modo mobile*/

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

// Função de call back (função dentro de outra função)
menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
    //If ternário
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active")
});