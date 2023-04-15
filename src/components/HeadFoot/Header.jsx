import React from 'react'
import logo from '../../Assets/movix-logo.png'
function Header() {
  return (
    // movix-logo
    <div className="container">
        <div className="logo">
            <img src={logo} />
        </div>
    </div>
  )
}

export default Header