import React from 'react'

function CryptoTableRow({ name, price, change24h, marketCap, volume24h, isHeader }) {
  
  return (
    <div className="crypto-table table-row">
      <div className={`table-data crypto-name ${isHeader ? 'table-header' : ''}`}>{name}</div>
      <div className={`table-data crypto-price ${isHeader ? 'table-header' : ''}`}>{price}</div>
      <div className={`table-data crypto-change ${isHeader ? 'table-header' : ''}`}>{change24h}</div>
      <div className={`table-data crypto-market-cap ${isHeader ? 'table-header' : ''}`}>{marketCap}</div>
      <div className={`table-data crypto-volume ${isHeader ? 'table-header' : ''}`}>{volume24h}</div>
    </div>
  )
}

export default CryptoTableRow