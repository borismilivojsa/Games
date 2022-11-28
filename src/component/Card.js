import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({results}) => {

    return (
        <Link to={`/games/${results.id}`}>
            <div
                className="item"
            >
                <div>
                    <div className="title">
                        { results.title }
                    </div>
                    <div>
                        <img src={ results.thumbnail } alt={ results.title }/>
                    </div>
                    <div>
                        <div>
                            Developer: { results.developer }
                        </div>
                        <div>
                            Publisher: { results.publisher }
                        </div>
                        <div>
                            Genre: { results.genre }
                        </div>
                        <div>
                            Release data: { results.release_date }
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card