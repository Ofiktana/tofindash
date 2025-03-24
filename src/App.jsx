import { useState, useEffect, createContext } from 'react'
import Navigation from "./components/Navigation/Navigation"
import Overview from './pages/Overview'

const DataContext = createContext()

function App() {

  const [ darkMode, setDarkMode ] = useState(false)
  const [ showMobileNav, setShowMobileNav ] = useState(false)

  //App Datasets
  const [crypto, setCrypto] = useState([])
  const [stocks, setStocks] = useState([])
  const [news, setNews] = useState([])

  function toggleDarkMode(){
    setDarkMode(darkMode => !darkMode)
  }

  function hideMobileNav(){
    setShowMobileNav(false)
  }

  function displayMobileNav(){
    setShowMobileNav(true)
  }
  
  useEffect(()=>{
    const cryptoURL = 'https://api.coinpaprika.com/v1/tickers'
    const stockURL = `https://financialmodelingprep.com/stable/company-screener?apikey=IWvh5cCuMr5uyygt6GZ04j72l2V9m5WA`
    const newsURL = 'https://financialmodelingprep.com/stable/fmp-articles?apikey=IWvh5cCuMr5uyygt6GZ04j72l2V9m5WA'

    fetch(cryptoURL)
      .then(res => res.json())
      .then(data => setCrypto(data))
      .catch(err => console.log(err))

    fetch(stockURL)
      .then(res => res.json())
      .then(data => setStocks(data))
      .catch(err => console.log(err))

    fetch(newsURL)
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(err => console.log(err))

  },[])

  return (
    <DataContext.Provider value={{cryptoData: crypto, stocksData: stocks, newsData: news}}>
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
    </DataContext.Provider>
  )
}

export default App

export { DataContext }
