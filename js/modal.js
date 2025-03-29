const modal = () => {
    const modal = document.querySelector('.search-model')

    const modalBtn = document.querySelector('.icon_search')

    const modalCross = modal.querySelector('.search-close-switch')

    const searchInput = modal.querySelector('#search-input')

    modalBtn.addEventListener('click', () => {
        modal.style.display = 'block'
    })

    modalCross.addEventListener('click', () => {
        modal.style.display = ''
    })

    searchInput.addEventListener('change', () => {
        console.log(searchInput.value)
    })
}

export default modal
