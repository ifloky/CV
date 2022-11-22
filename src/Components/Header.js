import React from 'react'
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <p className='logo'>Petrenko <span> Maksim</span></p>
      <nav className="mainscreen-menu">
        <div><span></span><a href="#myWork">My work </a></div>
        <div><span></span><a href="#GetTouch">Get in touch </a></div>
      </nav>
    </header>
  )
}
