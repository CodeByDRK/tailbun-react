import React from 'react'
import { Link } from 'react-router-dom'

export default function Landingscreen() {
  return (
    <section className='landing-screen'>
        <div className="landing-intro">
            <h3>The Tailbun</h3>
            <div className="underline"></div>
            <p>WORLD CLASS</p>
            <p>TASTY BURGERS</p>
            <p>Get The Best Burgers In one Place</p>
        </div>
        <div className="landing-buttons-container">
            <Link to={'/Menu'} className='btn-one'>
                View Menu
            </Link>
            <Link to={'/Contact'} className='btn-two'>
                Find Us
            </Link>
        </div>
    </section>
  )
}
