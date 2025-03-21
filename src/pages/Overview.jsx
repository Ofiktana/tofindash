import React from 'react'
import Title from '../components/Title'

import { LuSquareMenu } from "react-icons/lu";

function Overview({ showMobileNav }) {
  return (
    <div className='page-header'>
      <div className='menu-toggle-btn' onClick={()=>{showMobileNav()}}><LuSquareMenu /></div>
      <Title title='Financial Dashboard' subtitle='Track stocks and cryptocurrencies in real-time.'/>
    </div>
  )
}

export default Overview