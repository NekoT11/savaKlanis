import { useState } from 'react'

import { Routes, Route } from 'react-router-dom'
import { Card } from './components/card'
import { Head } from './components/head'
import MainPage  from './components/mainpage'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<MainPage/>} />
                
            </Routes>

        </>
    )
}


export default App