import { useState } from 'react'
import Navigation from "./components/Navigation"
import Overview from './pages/Overview'

function App() {

  const [ darkMode, setDarkMode ] = useState(false)
  const [ showMobileNav, setShowMobileNav ] = useState(false)

  function toggleDarkMode(){
    setDarkMode(darkMode => !darkMode)
  }

  function hideMobileNav(){
    setShowMobileNav(false)
  }

  function displayMobileNav(){
    setShowMobileNav(true)
  }
  
  return (
    <div className={`view-page ${darkMode ? 'body-dark' : 'body-light'}`}>
      <div className="sidebar">
        <Navigation />
        <button className='btn' onClick={toggleDarkMode}>Switch to {darkMode ? 'light' : 'dark'} mode</button>
      </div>
      <div className="main-display">
        <div className="main-display-area">
          <Overview showMobileNav={displayMobileNav} />
        </div>
      </div>
      <div className="mobile-nav" 
        style={{display: `${showMobileNav ? 'flex' : 'none'}`}}
        onClick={hideMobileNav}
      >
        <Navigation />
        <button className='btn' onClick={toggleDarkMode}>Switch to {darkMode ? 'light' : 'dark'} mode</button>
      </div>
    </div>
  )
}

export default App
