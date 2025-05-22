(function () {

    // Бургер

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

// Слайдер-хиро

new Swiper('.hero__slider', {

    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,

    navigation: {
        nextEl: '.hero__next',
        prevEl: '.hero__prev',
    },
});

// Поиск

const divs = document.querySelectorAll('.looking__hint');
const input = document.querySelector('.looking__input');

divs.forEach(div => {
    div.addEventListener('click', () => {
        input.value = div.textContent.trim();
    });
});