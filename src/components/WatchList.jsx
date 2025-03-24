import { useContext } from 'react'
import { DataContext } from '../App'
import { formatPrice } from './Cryptocurrencies'
import PercentageChange from './PercentageChange'
import WatchListTable from './WatchListTable'

function WatchList() {
  const cryptoSymbols = ['BTC', 'XRP', 'TEL']

  const watchData = useContext(DataContext).cryptoData.filter(coin => cryptoSymbols.includes(coin.symbol)).map(
    coin => {
      return {
        name: coin.name,
        symbol: coin.symbol,
        change: <PercentageChange value={coin.quotes.USD.percent_change_24h} /> ,
        price: formatPrice(coin.quotes.USD.price)
      }
    }
  )

  return (
    <div className='watch-list-frame'>
      <div className='watch-list-container'>
        {watchData.map(data => <WatchListTable {...data} />)}
      </div>
      <button className="btn">+ Add to Watchlist</button>
    </div>
  )
}

export default WatchList