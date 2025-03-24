import { useContext } from "react"
import { DataContext } from "../App"
import { formatPrice, formatBillion } from "./Cryptocurrencies"
import CryptoTableRow from "./CryptoTableRow"
import PercentageChange from "./PercentageChange"

export function randomChange(){
  {/* This random change generator function generates random numbers as placeholders for actual change values */}
  const posneg = Math.floor(Math.random()*2) == 0 ? -1 : 1
  return parseFloat((posneg * Math.random() * 2).toFixed(2))
}

function Stocks() {

  const focusedSymbols = ['AAPL','MSFT','NVDA','GOOGL','TSLA','META']

  const stocksData = useContext(DataContext).stocksData.filter(
    stock => focusedSymbols.includes(stock.symbol)
  )



  const stocksTableData = stocksData.map(stock => {
    return (
      {
        name: <div>{stock.companyName} <p className="text-gray">{stock.symbol}</p></div>,
        price: formatPrice(stock.price),
        change24h: <PercentageChange value={randomChange()} />,
        marketCap: formatBillion(stock.marketCap),
        volume24h: formatPrice(stock.volume),
        isHeader: false
      }
    )
  })


  const tableHeaders = {
    name: 'Name',
    price: 'Price',
    change24h: 'Change',
    marketCap: 'Market Cap',
    volume24h: 'Volume',
    isHeader: true
  }



  return (
    <div>
      <CryptoTableRow {...tableHeaders} />
      {stocksTableData.map(stock => <CryptoTableRow {...stock} />)}
    </div>
  )
}

export default Stocks