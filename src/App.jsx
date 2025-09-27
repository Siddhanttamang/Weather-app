import { useState } from 'react'
import reactLogo from './assets/react.svg'
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
