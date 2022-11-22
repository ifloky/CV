import React from 'react'
import './Work.css';

export default function Work(props) {
  return (
    <div className='work-prev'>
      <div className='work-img'>
        <img src={props.img} alt="img" />
      </div>
      <div className="work-description">
        <a href={props.link}><h3>{props.mainText}</h3><span></span></a>
        <p>{props.subText}</p>
      </div>
    </div>
  )
}
