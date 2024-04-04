import React from 'react'

function Header({count}) {
  return (
    <div>
      <h1 className='header'>Top {count} Movies of All Time</h1>
    </div>
  )
}

export default Header
