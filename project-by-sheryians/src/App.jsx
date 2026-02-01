import React from 'react'
import "./app.scss"
import Dock from './components/dock/Dock.jsx'
import Navbar from './components/nav/Navbar.jsx'


const App = () => {
  return (
    <main className='main'>
      <Navbar/>
      <Dock/>

    </main>
  )
}

export default App