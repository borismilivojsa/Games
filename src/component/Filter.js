import React, { useEffect, useState } from 'react'
import games from '../api/games'
import Card from './Card'
import { useSearchParams } from 'react-router-dom'

const Filter = ({results, setResults}) => {
    const [category, setCategory] = useState('')
    const [platform, setPlatform] = useState('')
    const [sort, setSort] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()
    let queryParamCategory = searchParams.get('category')
    let queryParamPlatform = searchParams.get('platform')
    let queryParamSort = searchParams.get('sort-by')

    useEffect(() => {
        showFilters()
    }, [queryParamCategory, queryParamPlatform, queryParamSort])

    const showFilters = async () => {
        const response = await games.get('/games', {
            params: {
                'platform': queryParamPlatform,
                'category': queryParamCategory,
                'sort-by': queryParamSort,
            },
        })
        setResults(response.data)
    }

    const handleClick = () => {
        setSearchParams({
            'category': category,
            'platform': platform,
            'sort-by': sort,
        })
    }


    return (
        <div className="relative w-full lg:max-w-sm">
            <select
                onClick={ handleClick }
                onChange={ e => {
                    setCategory(e.target.value)
                } }
                className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            >
                <option value="mmorpg">mmorpg</option>
                <option value="shooter">shooter</option>
                <option value="pvp">pvp</option>
                <option value="mmofps">mmofps</option>
            </select>
            <select
                onClick={ handleClick }
                onChange={ e => {
                    setPlatform(e.target.value)
                } }
                className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            >
                <option value="pc">PC</option>
                <option value="browser">Browser</option>
            </select>
            <select
                onClick={ handleClick }
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
                    <Card results={ result } key={ result.id }/>
                )) }
            </div>
        </div>
    )
}

export default Filter