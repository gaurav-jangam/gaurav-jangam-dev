import React from "react"
import "./Home.css"
import hero from "../../assets/personal.png"
import { Typewriter } from "react-simple-typewriter"
import { FiFacebook, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi'
import { SiExpress } from 'react-icons/si'
import { DiMongodb, DiReact, DiNodejs } from 'react-icons/di'

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Gaurav Jangam</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Professional Coder.", " Software Developer.", " WordPress Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I'm a ReactJS Developer. React Developer by Day, Freelancer by Night. I’m not adding motion just to spruce things up, but doing it in ways that.<br /> #GauravReact.</p>

          </div>
          <div className='right'>
            <img src={hero} alt="#home #index Gaurav Jangam | Software Developer" />
          </div>
        </div>
        <div className='hero_btn d_flex'>
          <div className='col_1'>
            <h4>FIND WITH ME</h4>
            <div className='button fi'>
              <a target='_blank' rel='noreferrer' href='https://github.com/gaurav-jangam/'>
                <button className='btn_shadow'>
                  <FiGithub size={20} />
                </button>
              </a>
              <a target='_blank' rel='noreferrer' href='https://www.facebook.com/gaurav.jangam.1/'>
                <button className='btn_shadow'>
                  <FiInstagram size={20} />
                </button>
              </a>
              <a target='_blank' rel='noreferrer' href='https://www.instagram.com/im_gauravvvv/'>
                <button className='btn_shadow'>
                  <FiLinkedin size={20} />
                </button>
              </a>
              <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/gaurav-jangam/'>
                <button className='btn_shadow'>
                  <FiFacebook size={20} />
                </button>
              </a>
            </div>
          </div>
          <div className='col_1'>
            <h4>Interested In</h4>
            <div className='button fi'>
              <button className='btn_shadow'>
                <DiMongodb size={20} />
              </button>
              <button className='btn_shadow'>
                <SiExpress size={20} />
              </button>
              <button className='btn_shadow'>
                <DiReact size={20} />
              </button>
              <button className='btn_shadow'>
                <DiNodejs size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
