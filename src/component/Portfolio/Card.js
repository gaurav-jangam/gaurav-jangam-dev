import React, { useState } from "react"
import { FcLike } from 'react-icons/fc'
import { IoClose } from 'react-icons/io5'
import { FiThumbsUp, FiChevronRight } from 'react-icons/fi'
import { HiArrowSmRight } from 'react-icons/hi'
const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={props.image} alt='#bsf #brainstorm force #UAE #UABB  #cortica #portfolio #website #peronal portfolio  #comapny work... - Gaurav Jangam | Software Developer' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.category}</span>
          <label>
            <FcLike /> {props.totalLike}
          </label>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <HiArrowSmRight size={30} />
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content d_flex'>
            <div className='modal-img left'>
              <img src={props.image} alt='#bsf #brainstorm force #UAE #UABB #portfolio #website #peronal portfolio  #comapny work... - Gaurav Jangam | Software Developer' />
            </div>
            <div className='modal-text right'>
              <span>Featured - Design</span>
              <h1>{props.title}</h1>
              <p>{props.desc}</p>
              <p>{props.desc2}</p>
              <div className='button f_flex mtop'>
                <button className='btn_shadow'>
                  LIKE THIS <FiThumbsUp />
                </button>
                <a target='_blank' rel="noreferrer" href={props.link}>
                  <button className='btn_shadow'>
                    VIEW<FiChevronRight />
                  </button>
                </a>
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <IoClose size={40} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
