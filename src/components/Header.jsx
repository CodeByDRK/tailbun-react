import React, { useState } from 'react'
import Shoppingcart from '../img/shopping-cart.png';
import Logo from '../img/Logo.png';
import Usericon from '../img/user-icon.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {

  const [activeNav, setActive] = useState(false)
  console.log(activeNav)

  function navToggle () {
    setActive(!activeNav);
  }

  return (
  <div>
      <div className='navbar'>
      <div className="logo">
        <Link to={'/*'}>
          <img src={Logo} alt="" />
        </Link>
      </div>

      <ul className='nav-links'>
        <li><Link className='nav-link-link' to={'/Menu'} >Menu</Link></li>
        <li><Link className='nav-link-link' to={'/Aboutus'} >About Us</Link></li>
        <li><Link className='nav-link-link' to={'/Contact'} >Contact</Link></li>
      </ul>

      <motion.div whileTap={{scale : 0.6}} className="shopping-cart">
        <img src={Shoppingcart} alt="" />
      </motion.div>

      <motion.div onClick={() => setActive(!activeNav)} whileTap={{scale : 0.6}} className="user-icon">
        <img src={Usericon} alt="" />
      </motion.div>

      <div className={`${activeNav == true ? 'sign-in-options' : 'nothing' }`}>
        <button>Log In</button>
        <button>Log Out</button>
      </div>
    </div>

      {/*.................MOBILE NAVBAR....................*/}
      <div className='mobile-navbar'>
        <div className="logo">
          <Link to={'/*'}>
            <img src={Logo} alt="" />
          </Link>
        </div>

        <ul className={`${activeNav == true ? 'nav-links' : 'nothing' }`}>
          <li><Link onClick={() => setActive(!activeNav)} className='nav-link-link' to={'/Menu'} >Menu</Link></li>
          <li><Link onClick={() => setActive(!activeNav)} className='nav-link-link' to={'/Aboutus'} >About Us</Link></li>
          <li><Link onClick={() => setActive(!activeNav)} className='nav-link-link' to={'/Contact'} >Contact</Link></li>
        </ul>

        <motion.div whileTap={{scale : 0.6}} className="shopping-cart">
          <img src={Shoppingcart} alt="" />
        </motion.div>

        <motion.div onClick={() => setActive(!activeNav)} whileTap={{scale : 0.6}} className="user-icon">
          <img src={Usericon} alt="" />
        </motion.div>

        <div className={`${activeNav == true ? 'sign-in-options' : 'nothing' }`}>
          <button>Log In</button>
          <button>Sign Out</button>
        </div>
    </div>
  </div>
  )
}
