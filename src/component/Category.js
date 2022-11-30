import { useEffect, useState } from 'react'
import games from '../api/games'
import Card from './Card'

const Category = ({results, setResults}) => {
    const [category, setCategory] = useState('')

    useEffect(() => {
        showCat()
    },[category])

    const showCat = async () => {
        const response = await games.get('/games', {
            params: {category: category}
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
            <div>
                { results.map((result) => (
                    <Card results={result} key={result.id}/>
                ))}
            </div>
        </div>
    )
}

export default Category