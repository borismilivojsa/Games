import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import games from '../api/games'
import './List.css'

const Item = () => {
    const [item, setItem] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        showIdGame()
    }, [id])

    const showIdGame = async () => {
        const response = await games.get('/game', {params: {id: id}})

        setItem(response.data)
    }

    if (! item) {
        return (
            <div>Loading...</div>
        )
    }


    return (

        <div
            className='item'
            onClick={() => window.open(`${item.game_url}`)}
        >
            <div>
                <div className='title'>
                    { item.title }
                </div>
                <div>
                    <img src={ item.thumbnail } alt={ item.title }/>
                </div>
                <div>
                    <div>
                        Developer: { item.developer }
                    </div>
                    <div>
                        Publisher: { item.publisher }
                    </div>
                    <div>
                        Genre: { item.genre }
                    </div>
                    <div>
                        Release data: { item.release_date }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item