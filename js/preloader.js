function preloader() {
    const preloader = document.querySelector('.preloder')

    // console.log('preloader: ', preloader)
    preloader.classList.add('active')

    setTimeout(() => {
        preloader.classList.remove('active')
    }, 500)
}

export default preloader
