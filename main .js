const logo = document.querySelector('.container-logo');
const links = document.querySelector('.links-web');

logo.addEventListener('click', function() {
    links.classList.toggle('hidden');
})
