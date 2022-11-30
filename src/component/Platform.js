import { useEffect, useState } from 'react'
import games from '../api/games'
import Card from './Card'

const Platform = ({results, setResults}) => {
    const [platform, setPlatform] = useState('')

    useEffect(() => {
        showPlatforms()
    },[platform])

    const showPlatforms = async () => {
        const response = await games.get('/games', {
            params: {platform: platform}
        })

        setResults(response.data)
    }

    return (
        <div className="relative w-full lg:max-w-sm">
            <select
                onChange= {e => {setPlatform(e.target.value)}}
                className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            >
                <option value='pc'>PC</option>
                <option value='browser'>Browser</option>
            </select>
            <div>
                { results.map((result) => (
                    <Card results={result} key={result.id}/>
                ))}
            </div>
        </div>
    )
}

export default Platform