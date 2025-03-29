import preloader from './preloader.js'
import cardBg from './bg_elements.js'
import modal from './modal.js'

const main = () => {
    preloader()
    cardBg() // Для примера переименовали функцию bgElements в cardBg
    modal()
}

main()
