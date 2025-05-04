(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

})()

// =====

const modal = document.querySelector('.modal')
const modalBtn = document.querySelector('.about__img-button')
const body = document.body

const openModal = () => {
    modal.classList.add('modal--opened')
    body.classList.add('body--modal-opened')
}

const closeModal = () => {
    modal.classList.remove('modal--opened')
    body.classList.remove('body--modal-opened')
}

modalBtn.addEventListener('click', event => {
    event.preventDefault()
    openModal()
})

modal.addEventListener('click', event => {
    if (event.target === modal || event.target.closest('.modal__cancel')) {
        event.preventDefault()
        closeModal()
    }
})

document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal.classList.contains('modal--opened')) {
        closeModal()
    }
})