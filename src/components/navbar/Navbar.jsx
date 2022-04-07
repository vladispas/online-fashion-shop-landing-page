import React from 'react'

import './navbar.css'

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#about'>About</a></p>
    <p><a href='#shop'>Shop</a></p>
    <p><a href='#contact'>Contact</a></p>
    <p><a href='#account'>Account</a></p>
  </>
)

const Navbar = () => {
  return (
    <div className='shop__navbar'>
      <div className='shop__navbar-links'>
        <div className='shop__navbar-links_main'>
          <a href='#home'><h1>Vlad Ispas</h1></a>
        </div>

        <div className='shop__navbar-links_container'>
          <Menu />
        </div>
      </div>
    </div>
  )
}

export default Navbar