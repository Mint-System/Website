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