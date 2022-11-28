import React, { useState } from 'react'
import List from './component/List'
import { Route, Routes } from 'react-router-dom'
import Headers from './component/Header'
import Item from './component/Item'
import Filter from './component/Filter'


const App = () => {
    const [results, setResults] = useState([])

    return (
        <div>
            <Headers/>
            <Routes>
                <Route path="/games" element={ <List results={ results } setResults={ setResults }/> }/>
                <Route path="/games/:id" element={ <Item /> }/>
                <Route path="/filter" element={ <Filter results={results} setResults={setResults}/> } />
                {/*<Route path="/category" element={ <Category results={ results } setResults={ setResults }/> }/>*/}
                {/*<Route path="/platform" element={ <Platform results={ results } setResults={ setResults }/> }/>*/}
                {/*<Route path="/search" element={ <Search results={ results } setResults={ setResults }/> }/>*/}
                {/*<Route path="/sort" element={ <Sort results={ results } setResults={ setResults }/> }/>*/}
            </Routes>
        </div>
    )
}

export default App