import React from 'react'
import "./app.scss"
import Dock from './components/dock/Dock.jsx'
import Navbar from './components/nav/Navbar.jsx'
import Window from './components/windows/Window.jsx'
import GithubProfile from './components/GithubProfile/GithubProfile.jsx'
const App = () => {
  return (
    <main className='main'>
      <Navbar/>

      <GithubProfile/>
  
      <Dock/>
    

    </main>
  )
}

export default App