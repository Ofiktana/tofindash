import React from 'react'
import NavItem from './NavItem'

import { LuChartLine } from "react-icons/lu";
import { FiHome } from "react-icons/fi";
import { IoTrendingUpSharp } from "react-icons/io5";
import { FiDollarSign } from "react-icons/fi";
import { LuBriefcase } from "react-icons/lu";
import { LuCreditCard } from "react-icons/lu";
import { LuChartColumn } from "react-icons/lu";
import { FiPieChart } from "react-icons/fi";
import { VscSettingsGear } from "react-icons/vsc";



function Navigation() {
  const navItems = [
    {
      title: 'FinDash',
      icon: <LuChartLine />,
      isLogo: true
    },
    
    {
      title: 'Overview',
      icon: <FiHome />,
      isLogo: false
    },
    
    {
      title: 'Stocks',
      icon: <IoTrendingUpSharp />,
      isLogo: false
    },
    
    {
      title: 'Cryptocurrencies',
      icon: <FiDollarSign />,
      isLogo: false
    },
    
    {
      title: 'Portfolio',
      icon: <LuBriefcase />,
      isLogo: false
    },
    
    {
      title: 'Transactions',
      icon: <LuCreditCard />,
      isLogo: false
    },
    
    {
      title: 'Analytics',
      icon: <LuChartColumn />,
      isLogo: false
    },
    
    {
      title: 'Reports',
      icon: <FiPieChart />,
      isLogo: false
    },
    
    {
      title: 'Settings',
      icon: <VscSettingsGear />,
      isLogo: false
    },

  ]

  return (
    <nav>
      {navItems.map(
        item => <NavItem {...item} key={item.title} />
      )}
    </nav>
  )
}

export default Navigation