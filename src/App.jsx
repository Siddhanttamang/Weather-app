import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/index.css'
import Home from './pages/Home'
import { WeatherProvider } from './contexts/WeatherContext'

function App() {
  return (
    <WeatherProvider>
    <main>
      <Home/>
    </main>
    </WeatherProvider>
  )
}

export default App
