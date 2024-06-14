import React, { useRef } from 'react'
import { FaBars , FaTimes } from "react-icons/fa";
import './Nav.css'
import shop from '../../assets/logo.png';

function Nav() {
    const NavRef=useRef();
    
    const showNavBar =() =>
    {
        NavRef.current.classList.toggle("responsive_nav");
    }
  return (
<>
   <header>
    <div className='logo'>
    <a href=""><img src={shop} alt="Logo" /><span className='txt'>Heaven <span className='dot'>C</span>afe.</span></a>
    </div>
      <nav ref={NavRef}>
            
        <a href="/">Home</a>
        <a href="Menu">Menu</a>
        <a href="Features">Features</a>
        <a href="Gallery">Gallery</a>
        
        <a href="Book a Table">Book a Table</a>
        <a href="About">About</a>

        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
        <FaTimes/>
        </button>      
      </nav> 
        <button className="nav-btn" onClick={showNavBar}>
        <FaBars/>
        </button>   
    </header>

    
</>
  )
}

export default Nav
