// header desktop dropdown
const headerDropdowns = document.querySelectorAll('.header-dropdown')

if (headerDropdowns) {
    headerDropdowns.forEach((dropdown) => {
        const button = dropdown.querySelector('.header-dropdown__button')
        const menu = dropdown.querySelector('.header-dropdown__menu')

        button.addEventListener(('click'), () => {
            menu.classList.toggle('hidden')
        })
    })
}



/* mobile nav */
const navTriggerBtn = document.querySelector('#nav__trigger');
const navCloseBtn = document.querySelector('#nav-close__btn');
const navMobile = document.querySelector('#nav-mobile');

if (navTriggerBtn) {
    console.log("hello,world")
    navTriggerBtn.addEventListener('click', () => {
        navMobile.classList.toggle('-translate-x-full');
    })
}

if (navCloseBtn) {
    navCloseBtn.addEventListener('click', () => {
        navMobile.classList.toggle('-translate-x-full');
    })
}
