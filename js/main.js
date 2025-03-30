import preloader from './preloader.js'
import cardBg from './bg_elements.js'
import modal from './modal.js'
import scrollToTop from './scroll_to_top.js'
import slider from './slider.js'
import mainData from './mainData.js'

const main = () => {
    preloader()
    cardBg() // Для примера переименовали функцию bgElements в cardBg
    modal()
    scrollToTop()
    slider()
    mainData()
}

main()
