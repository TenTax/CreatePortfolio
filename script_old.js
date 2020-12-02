var navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(pageYOffset > 20) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});