import React from 'react'
import './header.css'
import LOGO from '../../assets/12.png'

const Header = () => {
  return (
    <header>

      <div className='lgo'>
        <img src={LOGO} alt="techsatrt" />
      </div>
      <div className='list12'>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">Why us</a></li>
          <li><a href="#">Холбоо барих</a></li>
        </ul>
      </div>

    </header>
  )
}

export default Header