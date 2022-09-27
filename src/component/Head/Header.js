import React, { useState } from "react"
import "./header.css"
import logo from "../../assets/logo.png"
import { IoMenu } from 'react-icons/io5'
import { IoIosClose } from 'react-icons/io'

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <img src={logo} alt='#logo #header - Gaurav Jangam | Software Developer' />
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              <li>
                <a href='#home'>home</a>
              </li>
              <li>
                <a href='#features'>features</a>
              </li>
              <li>
                <a href='#resume'>resume</a>
              </li>
              <li>
                <a href='#work'>Company Work</a>
              </li>
              <li>
                <a href='#projects'>projects</a>
              </li>
              <li>
                <a className='home-btn' href='#contact'>contact</a>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <IoIosClose className='close home-btn' /> : <IoMenu className='open' />}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
