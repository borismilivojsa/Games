import React, { useEffect, useState } from 'react'
import games from '../api/games'
import Card from './Card'

const Filter = ({results, setResults}) => {
    const [category, setCategory] = useState('shooter')
    const [platform, setPlatform] = useState('pc')
    const [sort, setSort] = useState('release-date')

    useEffect(() => {
        showFilters()
    },[category, platform, sort])

    const showFilters = async () => {
        const response = await games.get('/games', {
            params: {
                platform: platform,
                category: category,
                'sort-by': sort
            }
        })
        setResults(response.data)
    }

    return (
        <div className="relative w-full lg:max-w-sm">
            <select
                onChange= {e => {setCategory(e.target.value)}}
                className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            >
                <option value='mmorpg'>mmorpg</option>
                <option value='shooter'>shooter</option>
                <option value='pvp'>pvp</option>
                <option value='mmofps'>mmofps</option>
            </select>
            <select
                onChange= {e => {setPlatform(e.target.value)}}
                className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            >
                <option value='pc'>PC</option>
                <option value='browser'>Browser</option>
            </select>
            <select
                onChange={ e => {setSort(e.target.value)}}
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

export default Filter