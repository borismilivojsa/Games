import React, { useEffect, useState } from 'react'
import games from '../api/games'
import Card from './Card'

const Sort = ({results, setResults}) => {
    const [sort, setSort] = useState('alphabetical')

    useEffect(() => {
        showSort()
    }, [sort])

    const showSort = async () => {
        const response = await games.get('/games', {
            params: {'sort-by': sort},
        })

        setResults(response.data)
    }

    return (
        <div className="relative w-full lg:max-w-sm">
            <select
                onChange={ e => {
                    setSort(e.target.value)
                } }
                className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            >
                <option value="release-date">release-date</option>
                <option value="alphabetical">alphabetical</option>
                <option value="relevance">relevance</option>
            </select>

            <div>
                { results.map((result) => (
                    <Card results={result} key={result.id}/>
                ))}
            </div>
        </div>
    )
}

export default Sort