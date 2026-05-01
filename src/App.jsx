import React from 'react'
import './App.css'
import Greeting from './components/Greeting'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Greeting />
    </div>
  )
}

export default App
