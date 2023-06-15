import React from 'react'
import './Work.css';
import './Work mobile.css';

export default function Work(props) {
  return (
    <div className='work-prev'>
      <div className='work-img'>
        <a href={props.link} target="blank"><img src={props.img} alt="img" /></a>
      </div>
      <div className="work-description">
        <a href={props.link} target="blank"><h3>{props.mainText}</h3><span></span></a>
        <p>{props.subText}</p>
      </div>
    </div>
  )
}
