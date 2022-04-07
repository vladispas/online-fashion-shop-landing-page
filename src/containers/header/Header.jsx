import React from 'react'

import './header.css'

import illustration from '../../assets/illustration.png'

const Header = () => {
  return (
    <div className='shop__header' id='home'>
      <div className='shop__header-content gradient__header'>
        <div className='shop__header-container'>
          <h1>Fashion</h1>
          <h1>Authenticity</h1>
          <h1>Lifestyle</h1>

          <button type='button'>Shop Now</button>
        </div>

        <div className='shop__header-image'>
          <img src={illustration} alt='illustration' />
        </div>
      </div>
    </div>
  )
}

export default Header