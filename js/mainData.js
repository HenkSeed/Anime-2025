const mainData = () => {
    // Получаем данные с сервиса Firebase
    fetch('https://animesite-71278-default-rtdb.firebaseio.com/anime.json')
        // Получаем данные из файла проекта
        // fetch('../db.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log('data.anime', data[0].ganre) // Приключения
        })
}

export default mainData
