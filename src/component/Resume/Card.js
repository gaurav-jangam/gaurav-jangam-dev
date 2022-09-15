import React from "react"
import { SiFreelancer } from 'react-icons/si'

const Card = (props) => {

  return (
    <>
      <div className='box btn_shadow'>
        <div className='title_content d_flex'>
          <div className='title'>
            <h2>{props.title}</h2>
            <span>{props.year}</span>
          </div>
          {props.rate ? (
            <div className='rate'>
              <button className='btn_shadow '><SiFreelancer /></button>
            </div>
          ) : (
            null
          )}

        </div>
        <hr />
        <p>{props.desc}</p>
      </div>
    </>
  )
}

export default Card
