import React from 'react'
import SocialLinks from '../constants/socialLinks'
import Sign from '../assets/sign1.png'
const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <SocialLinks styleClass='footer-links'></SocialLinks>
        <h4>copyright&copy; {new Date().getFullYear()}</h4>
      </div>
    </footer>
  )
}

export default Footer
