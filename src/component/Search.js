import React, { useEffect, useState } from 'react'
import games from '../api/games'
import './Search.css'
import './List.css'
import Card from './Card'

const Search = ({results, setResults}) => {
    const [term, setTerm] = useState('1')
    const [debouncedTerm,  setDebouncedTerm] = useState(term)


    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 500)

        return () => {
            clearTimeout(timerId)
        }
    }, [term])

    useEffect(() => {
        showIdGame()
    }, [debouncedTerm])

    const showIdGame = async () => {
        const response = await games.get('/game', {params:{id: debouncedTerm}})

        setResults(response.data)
    }

    return (
        <div className='search'>
            <label>Search</label>
            <input
                type='text'
                onChange={e => setTerm(e.target.value) }
            />
            <Card results={results}/>
        </div>
    )
}

export default Search