import React from 'react'

function Title({ title, subtitle }) {
  return (
    <div>
      <h1 className='title-text'>{title}</h1>
      <p className='subtitle-text text-gray'>{subtitle}</p>
    </div>
  )
}

export default Title