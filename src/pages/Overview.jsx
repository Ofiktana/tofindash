import React from 'react'
import Title from '../components/Title'

import { LuSquareMenu } from "react-icons/lu";
import SectionBlock from '../components/SectionBlock';

import MarketOverview from '../components/MarketOverview';
import WatchList from '../components/WatchList';
import Chart from '../components/Chart';
import Stocks from '../components/Stocks';
import Cryptocurrencies from '../components/Cryptocurrencies';
import MarketNews from '../components/MarketNews';

function Overview({ showMobileNav }) {

  const sectionItems = [
    {
      title: 'Market Overview',
      subtitle: 'Live market indices and commodities',
      className: 'market-overview',
      child: <MarketOverview />
    },
    {
      title: 'Watchlist',
      subtitle: 'Track your favorite assets',
      className: 'watch-list',
      child: <WatchList />
    },
    {
      title: '',
      subtitle: '',
      className: 'chart',
      child: <Chart />
    },
    {
      title: 'Stocks',
      subtitle: 'Top performing stocks today',
      className: 'stocks',
      child: <Stocks />
    },
    {
      title: 'Cryptocurrencies',
      subtitle: 'Top cryptocurrencies by market cap',
      className: 'cryptocurrencies',
      child: <Cryptocurrencies />
    },
    {
      title: 'Market News',
      subtitle: 'Latest financial news and updates',
      className: 'market-news',
      child: <MarketNews />
    },

  ]

  return (
    <>
      <div className='page-header'>
        <div className='menu-toggle-btn' onClick={()=>{showMobileNav()}}><LuSquareMenu /></div>
        <Title title='Financial Dashboard' subtitle='Track stocks and cryptocurrencies in real-time.'/>
      </div>

      <div className="overview-grid">
        {
          sectionItems.map(item => {
            return (
              <div className={`overview-grid-item ${item.className}`} key={item.className}>
                <SectionBlock title={item.title} subtitle={item.subtitle}>
                  <div className="section-content">
                    {item.child}
                  </div>
                </SectionBlock>
              </div>
            )
          })
        }
      
      </div>
    </>
  )
}

export default Overview