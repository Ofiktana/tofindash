import PercentageChange from "./PercentageChange"
import { useContext } from "react"
import { DataContext } from "../App"
import { randomChange } from "./Stocks"
import { formatPrice } from "./Cryptocurrencies"
import MarketOverviewTable from "./MarketOverviewTable"

function MarketOverview() {

  const marketData = useContext(DataContext)
  const cryptoSymbols = ['BTC','SOL', 'USDT']
  const stocksSymbols = ['WMT','AMZN']
  const marketCrypto = marketData.cryptoData.filter(coin => cryptoSymbols.includes(coin.symbol)).map(
    coin => { 
      return {
        name: coin.name, 
        price: formatPrice(coin.quotes.USD.price), 
        change: <PercentageChange value={coin.quotes.USD.percent_change_24h} /> 
      }
    }
  )
  const marketStocks = marketData.stocksData.filter(stock => stocksSymbols.includes(stock.symbol)).map(
    stock => { 
      return {
        name: stock.companyName, 
        price: formatPrice(stock.price), 
        change: <PercentageChange value={randomChange()} /> 
      }
    }
  )

  return (
    <div className="market-overview-data-container">
      {marketCrypto.map(coin => <MarketOverviewTable {...coin} />)}
      {marketStocks.map(stock => <MarketOverviewTable {...stock} />)}
    </div>
  )
}

export default MarketOverview