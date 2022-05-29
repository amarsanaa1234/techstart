import React from 'react'
import './footer.css'
import logo from './../../assets/12.png'
import { FaDiscord } from '@react-icons/all-files/fa/FaDiscord'
import { FaEnvelopeOpenText } from '@react-icons/all-files/fa/FaEnvelopeOpenText'
import { AiOutlineFacebook } from '@react-icons/all-files/ai/AiOutlineFacebook'
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'
import { AiFillInstagram } from '@react-icons/all-files/ai/AiFillInstagram'


const Footer = () => {
  return (
    <div>
      <div className='line1'>

      </div>
      <footer>
        <div className='footer_logo'>
          <img src={logo} alt="" />
        </div>
        <div className='icon'>
          <div className='footer_icons'>
            <a href=""><FaDiscord /></a>
          </div>
          <div className='footer_icons'>
            <a href="">< FaEnvelopeOpenText /></a>
          </div>
          <div className='footer_icons'>
            <a href=""><AiOutlineFacebook /></a>
          </div>
          <div className='footer_icons'>
            <a href=""><FaYoutube /></a>
          </div>
          <div className='footer_icons'>
            <a href=""><AiFillInstagram /></a>
          </div>
        </div>
        <div className='mail'>
          <div className='footer_text'>
            <p>E-mail:</p>
          </div>
          <div className='footer_text'>
            <p>Phone:</p>
          </div>
          <div className='footer_text'>
            <p>Address:</p>
          </div>

        </div>
        <div className='2022'>
          <div className='footer_text_text'>
            <p>techstartco@gmail.com</p>
          </div>
          <div className='footer_text_text'>
            <p>+976 99075991</p>
          </div>
          <div className='footer_text_text'>
            <p>БЗД, 15-р хороо, Хоймор оффис, 707 тоот</p>
          </div>
        </div>
      </footer>
    </div>

  )
}


export default Footer