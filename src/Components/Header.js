import React from 'react'
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <p className='logo'>Petrenko <span> Maksim</span></p>
      <nav className="mainscreen-menu">
        <div><a href="#myWork">My work <span></span></a></div>
        <div><a href="#GetTouch">Get in touch <span></span></a></div>
      </nav>
    </header>
  )
}
