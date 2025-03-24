import React from 'react'

function StockTableRow({ name, price, marketCap, volume24h, isHeader }) {
  return (
    <div className="stock-table table-row">
      <div className={`table-data stock-name ${isHeader ? 'table-header' : ''}`}>{name}</div>
      <div className={`table-data stock-price ${isHeader ? 'table-header' : ''}`}>{price}</div>
      <div className={`table-data stock-market-cap ${isHeader ? 'table-header' : ''}`}>{marketCap}</div>
      <div className={`table-data stock-volume ${isHeader ? 'table-header' : ''}`}>{volume24h}</div>
    </div>
  )
}

export default StockTableRow