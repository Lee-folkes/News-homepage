const primaryNav = document.querySelector('.nav');
const navToggle = document.querySelector('.mobile-nav-toggle');
const backgroundCover = document.querySelector('.background-cover');

navToggle.addEventListener('click',() => {
    const visibility = primaryNav.getAttribute('data-visible');
    
    if(visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        backgroundCover.setAttribute('data-visible', true);
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        backgroundCover.setAttribute('data-visible', false);
    }
});