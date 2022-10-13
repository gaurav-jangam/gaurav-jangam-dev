import React from "react"
import { FaGithubAlt, FaQuoteRight } from 'react-icons/fa'
import { CgMediaLive } from 'react-icons/cg'
import TestimonialApi from "./TestimonialApi"


const Slide = ({ id, image, name, subString, subString2, click, link, link2, name2, date, desc, valueIndex, index }) => {
  let position = "nextSlide"
  if (valueIndex === index) {
    position = "activeSlide"
  }
  if (valueIndex === index - 1 || (index === 0 && valueIndex === TestimonialApi.length - 1)) {
    position = "lastSlide"
  }

  return (
    <>
      <article className={`d_flex ${position}`} key={id}>
        <div className='left box_shodow'>
          <div className='img'>
            <img src={image} alt='#peronal portfolio #portfolio #sea food store #instagram #instagram clone #amazon #amazon clone #whatsapp #whatsapp clone... - Gaurav Jangam | Software Developer' />
          </div>
          <div className='details mtop'>
            <span className='primary_color'>{name}</span>
            <h2>{click}</h2>
            <br />
            <div className="btn-link-grp">
              <label className="btn-links"> <a className='project-btn' rel='noreferrer' target='_blank' href={link}>{subString} <CgMediaLive size={15} /></a></label>
              <br />
              <br />
              {link2 ? (
                <label className="btn-links"> <a className='project-btn' rel='noreferrer' target='_blank' href={link2}>{subString2} <FaGithubAlt size={15} /></a></label>
              ) : null}
            </div>

          </div>
        </div>

        <div className='right'>
          <div className='icon'>
            <div className='quote'>
              <FaQuoteRight size={150} opacity={0.5} />
            </div>
          </div>

          <div className='content box_shodow mtop'>
            <h1>{name2}</h1>
            <h3>{date}</h3>
            <p>{desc}</p>
          </div>
        </div>
      </article>
    </>
  )
}

export default Slide
