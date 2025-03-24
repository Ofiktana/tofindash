import { useContext } from 'react'
import { DataContext } from '../App'


function MarketNews() {
  const newsData = useContext(DataContext).newsData.slice(0,5)

  function newsHeadline(title,source,time,category,newslink){
    return (
      <div className="news-container">
        <div className="news-title text-bold text-large">
          <a href={newslink} target='_blank'>{title}</a>
        </div>
        <div className="news-meta-data">
          <div className="text-gray">{source}</div>
        </div>
      </div>
    )
  }

  return (
    <div>MarketNews</div>
  )
}

export default MarketNews