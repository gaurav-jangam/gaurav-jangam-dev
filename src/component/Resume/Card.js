import React, { useState } from "react";
import { SiFreelancer } from 'react-icons/si'


const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

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
        {
          props.cat === 'experience' ?
            <ReadMore>
              {props.desc}
            </ReadMore> :
            <p>{props.desc}</p>
        }
      </div>
    </>
  )
}

export default Card
