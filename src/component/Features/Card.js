import React from "react"
import { MdOutlineFeaturedPlayList } from 'react-icons/md'

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow'>
        <img src={props.image} alt='' />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <MdOutlineFeaturedPlayList />
      </div>
    </>
  )
}

export default Card
