//Hamburger menu

const hamburger = document.querySelector('.hamburger');
const linksWeb = document.querySelector('.links-web');
const linksSoc = document.querySelector(".links-soc");

hamburger.addEventListener('click', function() {
    linksWeb.classList.toggle('active');
    linksSoc.classList.toggle('active');
})



