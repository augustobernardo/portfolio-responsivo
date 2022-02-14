// Abre e fecha menu lateral em modo mobile

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

// Função de call back (função dentro de outra função)
menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
        //If ternário
        ?
        menuMobile.classList.replace("bi-list", "bi-x") :
        menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active")
});


// Fecha o menu quando clicar em algum item e muda o icone para list 

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener("click", () => {
        if (body.classList.contains('menu-nav-active')) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    })
})

// Animar todos os itens na tela que tiverem o atributo data-anime

const item = document.querySelectorAll("[data-anime"); //vai gerar um array para poder fazer um forEach

const animeScroll = () => {
    // inicialmente precisamos pegar qual o topo da página
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;

    // lê a altura do windowsTop e se a condição for verdadeira adiciona a classe "animate"
    item.forEach(element => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate")
        }
    });

}

animeScroll();

//pegando o scroll da tela
window.addEventListener("scroll", () => {
    animeScroll()
});