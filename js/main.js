let btnham = document.querySelector(".menu-btn");
let menuLink = document.querySelector(".header")
let pageLink = document.querySelector(".navigation")
let lang = document.querySelector(".langs")
btnham.addEventListener('click', function(e){
    e.preventDefault
    btnham.classList.toggle('active')
    pageLink.classList.toggle('page-active')
    menuLink.classList.toggle('links-active')
    lang.classList.toggle('lang-active')
});