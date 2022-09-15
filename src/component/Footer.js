import React from "react"
import hero from "../assets/personal.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner footer text-center top'>
          <div className='img'>
            <img src={hero} alt='#logo #footer - Gaurav jangam | Software Developer' />
          </div>
          <p>© 2022. All rights reserved by Gaurav Jangam.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
