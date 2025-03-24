import React from 'react'

function WatchListTable({ name, symbol, price, change }) {
  return (
    <div className="watch-list-table">
      <div className="watch-list-table-data">{name}</div>
      <div className="watch-list-table-data">{price}</div>
      <small className="watch-list-table-data text-gray">{symbol}</small>
      <small className="watch-list-table-data">{change}</small>
    </div>
  )
}

export default WatchListTable