import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <>
    <NavBar/>
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </main>

    </>
  )
}

export default App
