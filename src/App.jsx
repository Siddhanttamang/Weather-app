import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/index.css'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </main>

    </>
  )
}

export default App
