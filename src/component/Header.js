import {Link} from 'react-router-dom'

const Headers = () => {
    return (
        <div>
            <div><Link to='/games'>Games</Link></div>
            <div><Link to='/filter'>Filter</Link></div>
            {/*<div><Link to='/category'>Category</Link></div>*/}
            {/*<div><Link to='/platform'>Platform</Link></div>*/}
            {/*<div><Link to='/search'>Search</Link></div>*/}
            {/*<div><Link to='/sort'>Sort</Link></div>*/}
        </div>
    )
}

export default Headers