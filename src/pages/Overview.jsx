import React from 'react'
import Title from '../components/Title'

import { LuSquareMenu } from "react-icons/lu";
import SectionBlock from '../components/SectionBlock';

function Overview({ showMobileNav }) {
  return (
    <>
      <div className='page-header'>
        <div className='menu-toggle-btn' onClick={()=>{showMobileNav()}}><LuSquareMenu /></div>
        <Title title='Financial Dashboard' subtitle='Track stocks and cryptocurrencies in real-time.'/>
      </div>

      <div className="overview-grid">
        <div className="overview-grid-item market-overview">
          <SectionBlock title='Market Overview' subtitle='Live market indices and commodities'>

          </SectionBlock>
        </div>
        <div className="overview-grid-item watch-list">
          <SectionBlock title='Watchlist' subtitle='Track your favorite assets'>

          </SectionBlock>
        </div>
        <div className="overview-grid-item chart">
          <SectionBlock title='' subtitle=''>

          </SectionBlock>
        </div>
        <div className="overview-grid-item stocks">
          <SectionBlock title='Stocks' subtitle='Top performing stocks today'>

          </SectionBlock>
        </div>
        <div className="overview-grid-item cryptocurrencies">
          <SectionBlock title='Cryptocurrencies' subtitle='Top cryptocurrencies by market cap'>

          </SectionBlock>
        </div>
        <div className="overview-grid-item market-news">
          <SectionBlock title='Market News' subtitle='Latest financial news and updates'>

          </SectionBlock>
        </div>
      </div>
    </>
  )
}

export default Overview