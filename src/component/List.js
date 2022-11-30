import React, { useEffect, useState } from 'react'
import games from '../api/games'
import './List.css'
import Card from './Card'
import { useSearchParams } from 'react-router-dom'

const List = ({results, setResults}) => {

    const [category, setCategory] = useState('')
    const [platform, setPlatform] = useState('')
    const [sort, setSort] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()
    let queryParamCategory = searchParams.get('category')
    let queryParamPlatform = searchParams.get('platform')
    let queryParamSort = searchParams.get('sort-by')

    useEffect(() => {
        showListGames()
    }, [queryParamCategory, queryParamPlatform, queryParamSort])

    const showListGames = async () => {
        if (! queryParamPlatform && ! queryParamCategory) {
            const response = await games.get('/games')

            setResults(response.data)

            return
        }

        if (queryParamPlatform && ! queryParamCategory) {
            const response = await games.get('/games', {
                params: {platform: queryParamPlatform}
            })

            setResults(response.data)

            return
        }

        if (! queryParamPlatform && queryParamCategory) {
            const response = await games.get('/games', {
                params: {category: queryParamCategory}
            })

            setResults(response.data)

            return
        }


        const response = await games.get('/games', {
            params: {
                'platform': queryParamPlatform,
                'category': queryParamCategory,
                'sort-by': queryParamSort
            },
        })

        setResults(response.data)

        return
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
                <option value="mmorpg" selected={queryParamCategory === 'mmorpg'}>mmorpg</option>
                <option value="shooter" selected={queryParamCategory === 'shooter'}>shooter</option>
                <option value="pvp" selected={queryParamCategory === 'pvp'}>pvp</option>
                <option value="mmofps" selected={queryParamCategory === 'mmofps'}>mmofps</option>
            </select>
            <select
                onClick={ handleClick }
                onChange={ e => {
                    setPlatform(e.target.value)
                } }
                className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            >
                <option value="pc" selected={queryParamPlatform === 'PC'}>PC</option>
                <option value="browser" selected={queryParamPlatform === 'Browser'}>Browser</option>
            </select>
            <select
                onClick={ handleClick }
                onChange={ e => {
                    setSort(e.target.value)
                } }
                className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            >
                <option value="release-date" selected={queryParamSort === 'release-date'}>release-date</option>
                <option value="alphabetical" selected={queryParamSort === 'alphabetical'}>alphabetical</option>
                <option value="relevance" selected={queryParamSort === 'relevance'}>relevance</option>
            </select>
            <div>
                { results.map((result) => (
                    <Card results={ result } key={ result.id }/>
                )) }
            </div>
        </div>
    )

}

export default List