import React, { useEffect } from 'react'
import games from '../api/games'
import './List.css'
import Card from './Card'
import { useParams } from 'react-router-dom'

const List = ({results, setResults}) => {


    useEffect(() => {
        showListGames()
    }, [])

    const showListGames = async () => {
        const response = await games.get('/games')

        setResults(response.data)
    }

    return (
        <div>
            { results.map((result) => (
                <Card results={result} key={result.id} />
            ))}
        </div>
    )

}

export default List