import axios from 'axios'

export default axios.create({
    method: 'GET',
    baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api',
    headers: {
        'X-RapidAPI-Key': '318ab712cbmsh0461ef11414b501p1d02dejsnfcebc4753e98',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    },
})