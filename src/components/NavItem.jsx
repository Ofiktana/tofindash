import React from 'react'

function NavItem({ icon, title, isLogo }) {
  return (
    isLogo ? 
      (<div className='nav-logo'>{icon} {title}</div>) 
      : (<div className='nav-item'>{icon} {title}</div>)
  )
}

export default NavItem