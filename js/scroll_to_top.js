const scrollToTop = () => {
    const scrollToTopBtn = document.getElementById('scrollToTopButton')
    scrollToTopBtn.addEventListener('click', (event) => {
        event.preventDefault()

        seamless.scrollIntoView(document.querySelector('.header'), {
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
        })
    })
}

export default scrollToTop
