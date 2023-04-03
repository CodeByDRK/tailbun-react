import React from 'react'
import instalogo from '../img/instagram-logo-black.png'
import Facebooklogo from '../img/facebook-logo-black.png'
import Twitterlogo from '../img/twitter-logo-black.png'
import Locationicon from '../img/location-icon.png'
import Envelopeicon from '../img/envelop-icon.png'
import Phoneicon from '../img/phone-icon.png'

export default function Contact() {
  return (
    <section className="content-page">
      <div className="contact-container">
        <div className="left-contact">
          <form action="">
            <label htmlFor="">Name</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="email" />
            <label htmlFor="">Message</label>
            <textarea />
          </form>
        </div>

        <div className="right-contact">
          <div className="contact-info-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo aliqua. Ut enim sscing elit, sed do eiusmo aliqua. Ut enim sscing elit, sed do eiusmo aliqua. Ut enim squa. Ut enim sscing elit, sed do eiusmo aliqua. Ut enim s
          </div>
          <div className="contact-addressing">
            <p>
              <img src={Locationicon} alt="" />
              somewhere
            </p>
            <p>
              <img src={Phoneicon} alt="" />
              +123456789
            </p>
            <p>
              <img src={Envelopeicon} alt="" />
              email@email.com
            </p>
          </div>
          {/* <div className="contact-socials">
            <a href="www.instagram.com"><img src={instalogo} alt="" /></a>
            <a href="facebook.com"><img src={Facebooklogo} alt="" /></a>
            <a href="twitter.com"><img src={Twitterlogo} alt="" /></a>
          </div> */}
        </div>
      </div>
    </section>
  )
}
