const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixedNav);

function fixedNav() {
    if (window.scrollY > nav.offsetHeight + 170) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}