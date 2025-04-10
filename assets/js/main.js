// header desktop dropdown
const headerDropdowns = document.querySelectorAll('.header-dropdown')

if (headerDropdowns) {
    headerDropdowns.forEach((dropdown) => {
        const button = dropdown.querySelector('.header-dropdown__button')
        const menu = dropdown.querySelector('.header-dropdown__menu')


        button.addEventListener(('click'), () => {

            document.querySelectorAll('.header-dropdown__menu').forEach(otherDropdown => {
                if (otherDropdown !== menu) {
                    otherDropdown.classList.add('hidden');
                }
            });

            menu.classList.toggle('hidden')
        })
    })
}


/* mobile nav */
const navTriggerBtn = document.querySelector('#nav__trigger');
const navMobile = document.querySelector('#nav-mobile');

if (navTriggerBtn) {
    navTriggerBtn.addEventListener('click', () => {
        navTriggerBtn.classList.toggle('nav__trigger--active')
        navMobile.classList.toggle('nav-mobile__open');
    })
}


/* Nav Mobile Dropdown */
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



// header scroll
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('header');

    function checkScroll() {
        const scrollPosition = window.scrollY;
        // Get the height of the viewport
        const viewportHeight = window.innerHeight;

        if (scrollPosition > viewportHeight) {
            header.classList.add('header__scrolled');
        } else {
            header.classList.remove('header__scrolled');
        }
    }

    checkScroll();

    window.addEventListener('scroll', checkScroll);
});
