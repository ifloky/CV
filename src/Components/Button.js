import React from 'react'
import './Button.css' 
import '../App.css';
import '../App-mobile.css'


export default function Button(props) {
  return (
    <div className='button'><span></span><a href={props.link} target={props.target}>{props.text}</a></div>
  )
}
