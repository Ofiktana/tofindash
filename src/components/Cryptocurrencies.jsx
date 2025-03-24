import { useContext } from "react"
import CryptoTableRow from "./CryptoTableRow"
import { DataContext } from "../App"
import PercentageChange from "./PercentageChange"

export function formatPrice(price){
  const truncatedPrice = parseFloat(price.toFixed(2))
  return `$${truncatedPrice.toLocaleString('en-US')}`
}

export function formatBillion(value){
  let truncatedValue = parseFloat((value/1000000000).toFixed(1))
  if(truncatedValue < 1000){
    return `$${truncatedValue.toLocaleString('en-US')}B`
  }else{
    truncatedValue /= 1000
    return `$${truncatedValue.toLocaleString('en-US')}T`
  }
}

function Cryptocurrencies() {

  const cryptoData = useContext(DataContext).cryptoData.slice(0,6).map(
    coin => {
      return (
        {
          name: <div>{coin.name} <p className="text-gray">{coin.symbol}</p></div>,
          price: formatPrice(coin.quotes.USD.price),
          change24h: <PercentageChange value={coin.quotes.USD.percent_change_24h} />,
          marketCap: formatBillion(coin.quotes.USD.market_cap),
          volume24h: formatBillion(coin.quotes.USD.volume_24h),
          isHeader: false
        }
      )
    }
  )

  const tableHeaders = {
    name: 'Name',
    price: 'Price',
    change24h: '24h Change',
    marketCap: 'Market Cap',
    volume24h: 'Volume (24h)',
    isHeader: true
  }

  return (
    <div>
      <CryptoTableRow {...tableHeaders} />
      {cryptoData.map(coin => <CryptoTableRow {...coin} />)}
    </div>
  )
}

export default Cryptocurrencies