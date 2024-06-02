"use client"
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import "../components/style/style.css"
import { IoMenu } from "react-icons/io5";





const Navbar = () => {


  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  return (
    <div className='nav-container'>
      

      <nav className='nav-main'>

    

    <div className='nav-image'>
         <img src='/Group.svg' alt='logo'  />
    </div>
    
   



    <div className={`nav-link-main ${menuOpen ? 'open' : ''}`}>
      <div>
      <Link className='nav-link' href='/' onClick={closeMenu}>Home</Link>
      </div>
      
      <div>
      <Link  className='nav-link' href='/' onClick={closeMenu}>About_us</Link>
      </div>
       
       <div>
       <Link  className='nav-link' href='/' onClick={closeMenu}>Pricing</Link>
       </div>
      
      <div>
      <Link  className='nav-link' href='/' onClick={closeMenu}>Features</Link>
      </div>
     
    </div>

    <div className='hamburger-menu' onClick={toggleMenu}>
          <IoMenu/>
        </div>

 




    <div className='download-btn-main'>
      <Link href='/download' className='download-btn'> Download</Link>
    </div>
   

      </nav>
      
      </div>
  )
}

export default Navbar