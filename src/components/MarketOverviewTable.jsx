import React from 'react'

function MarketOverviewTable({ name, price, change }) {
  return (
    <div className="market-overview-column">
      <div className="market-table-data text-gray">{name}</div>
      <div className="market-table-data text-bold text-large">{price}</div>
      <div className="market-table-data">{change}</div>
    </div>
  )
}

export default MarketOverviewTable