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
        navMobile.classList.toggle('nav-mobile__open');
    })
}

if (navCloseBtn) {
    navCloseBtn.addEventListener('click', () => {
        navMobile.classList.remove('nav-mobile__open');
    })
}

const buttons = document.querySelectorAll('.nav-mobile__button');

buttons?.forEach(button => {
    const svg = button.querySelector('svg');
    button.addEventListener('click', function () {
        // Toggle the visibility of the next sibling dropdown menu
        const dropdown = this.nextElementSibling;

        // Close other open dropdowns
        document.querySelectorAll('.nav-mobile__dropdown').forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
                otherDropdown.classList.add('hidden');
            }
        });

        // Toggle the clicked dropdown
        if (dropdown.classList.contains('hidden')) {
            dropdown.classList.remove('hidden');

            if (svg) {
                svg.classList.add('nav-mobile__svg--animated')
            }
        } else {
            dropdown.classList.add('hidden');

            if (svg) {
                svg.classList.remove('nav-mobile__svg--animated')
            }
        }
    });
});