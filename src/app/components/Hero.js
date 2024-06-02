import React from 'react'

import "../components/style/style.css"
import { HiArrowNarrowRight } from "react-icons/hi";
import { MdSlowMotionVideo } from "react-icons/md";

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-main' >

           <div className='heading-main'>
            <div>
            <h1>Make The Best </h1>
            <h1> Financial Decisions</h1>
            <p>Lorem ipsum dolor sit amet ut labore </p>
            <p>eiusmod tempor incididunt et dolore </p>
            </div>

            <div className='hero-btn-main'>
                <button className='get-btn'>Get started <HiArrowNarrowRight size={"20px"} /></button>
                <button className='watch-btn'><MdSlowMotionVideo/> watch video</button>
            </div>

             <div className='hero-image-main'>
                <img  src='/hero1.svg'  alt='hero'/>
             </div>
           
            </div>

            <div className='hero-side-image'>
            <img className='image1' src= '/iphone1.svg' alt='iphone' />
            <img className='image2' src='/iphone2.svg'  alt='iphone' />
            <img className='image3' src='/iphone3ring.svg' alt='iphone' />
            </div>
           
      



        </div>

        
    </div>
  )
}

export default Hero