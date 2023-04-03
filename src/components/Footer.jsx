import React from 'react'
import Logo from '../img/Logo.png';
import instalogo from '../img/insta-logo.png';
import facebooklogo from '../img/facebook-logo.png';
import contactlogo from '../img/contact-logo.png';
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <section className="footer">
      <img className='footer-logo' src={Logo} alt="" />
      <div className="left-footer">
        <div className='footer-column'>
          <h4>Follow</h4>
          <p>
            <Link to={'/*'} className='footer-link' >
            <img className='footer-link-img' src={instalogo} alt="insta" />
            Instagram
            </Link>
          </p>
          <p>
            <Link to={'/*'} className='footer-link' >
            <img className='footer-link-img' src={facebooklogo} alt="insta" />
            Facebook
            </Link>
          </p>
        </div>
        <div className='footer-column'>
          <h4>Contact Us</h4>
          <p>
            <img className='footer-link-img' src={contactlogo} alt="insta" />
            +123456789
          </p>
        </div>
      </div>
      <div className="right-footer">
        <div className='footer-column'>
          <h4>Restaurant</h4>
          <p>14th Avenue</p>
          <p>Street Location</p>
        </div>
        <div className='footer-column'>
          <h4>Find Us</h4>
          <p>
            Click To Open Map
          </p>
        </div>
      </div>
    </section>
  )
}
