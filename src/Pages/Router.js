import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './Home'
import Update from './Update'
import Craate from './Craate'
import Details from './Details'




function Router() {
    return (
        <Routes>
            <Route axact path='/' element={<Home />} />
            <Route path='/Update/:id' element={<Update />} />
            <Route path='/Details/:id' element={<Details />} />
            <Route path='/Craete' element={<Craate />} />
        </Routes>
    )
}

export default Router