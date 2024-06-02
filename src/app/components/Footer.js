import React from 'react'
import "../components/style/style.css"
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='footer-container'>
        
        <div className='footer-main'>
           
           <div className='footer-first'>
                 <img src='Group.svg' />
                 <p> <MdEmail/> Help@fribix.com</p>
                 <p> <IoCall/> 1235345646</p>
           </div>

          <div className='footer-second'>
        <h4>Links</h4>
          <Link className='footer-link' href='/'>Home</Link>
          <Link  className='footer-link'  href='/'>About us</Link>
          <Link  className='footer-link'  href='/'>Bookings</Link>
          <Link  className='footer-link'  href='/'>Blog</Link>
          </div>


        <div className='footer-third'>
         <h4>Legal</h4>
        <p>Terms of use</p>
        <p>privacy policy</p>
        <p>cookie policy</p>

        </div>

        <div className='footer-fourth'>
         <h4>Product</h4>
        <p>take tour</p>
        <p>Live chat</p>
        <p>Reviews</p>

        </div>

        <div className='footer-fifth'>
         <h4>News letter</h4>
        <p>stay up to date</p>
       <div className='footer-btn-main'>
        <button  className='email-btn'>your Email</button>
        <button className='subscribe-btn'>Subscribe</button>
       </div>

        </div>

        </div>

      
      <div className='copywrite' >
        <p>copywrite2024 URify.com All Rights Reserved</p>
      </div>



    </div>
  )
}

export default Footer