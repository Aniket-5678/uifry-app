import React from 'react'
import "../components/style/style.css"

const Testimonial = () => {
  return (
    <div className='testimonial-container'>
        <div className='testimonial-heading'>
            <h4>TESTIMONIAL</h4>
            <h1>What our Users </h1>
            <h1>say About us? </h1>
        </div>

        <div className='users-main'>
            <div>
              <img className='user-img' src='/users.svg' alt='users' height={"700px"}/>
            </div>
             
             <div className='user-content'>
                <h3>The Best Financial Accounting </h3>
                <h3>App Ever!</h3>

               <div className='test-parah'>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor</p>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor</p>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor</p>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor</p>
               </div>

               <div className='user-logo'>
                <img src='/userlogo.svg' alt='logo' />
                <p>Nick jonas</p>
               </div>

             </div>



        </div>
          
          <div className='faq-container'>

            <div className='faq-main'>
           
            <div>
                <h4>FAQ</h4>
                <h2>Frequently Asked</h2>
                <h2>Questions</h2>
              </div>
               
               <div className='faq-content-main'>
                   <div className='faq-text-first'>
                     <h3>The Best Financial Accounting</h3>
                     <h3>App Ever!</h3>

                     <p>enim ad minima veniam, quis nostrum</p>
                     <p>enim ad minima veniam, quis nostrum</p>
                   </div>
                 
                 <div className='Faq-text-second'>
                 <h3>The Best Financial Accounting</h3>
                     <h3>App Ever!</h3>

                     <p>enim ad minima veniam, quis nostrum</p>
                     <p>enim ad minima veniam, quis nostrum</p>
                 </div>



               </div>
      
               <div className='faq-content-main'>

               <div className='Faq-text-second'>
                 <h3>The Best Financial Accounting</h3>
                     <h3>App Ever!</h3>

                     <p>enim ad minima veniam, quis nostrum</p>
                     <p>enim ad minima veniam, quis nostrum</p>
                 </div>
                   <div className='faq-text-first'>
                     <h3>The Best Financial Accounting</h3>
                     <h3>App Ever!</h3>

                     <p>enim ad minima veniam, quis nostrum</p>
                     <p>enim ad minima veniam, quis nostrum</p>
                   </div>
                 
                



               </div>
               <div className='faq-content-main'>
                   <div className='faq-text-first'>
                     <h3>The Best Financial Accounting</h3>
                     <h3>App Ever!</h3>

                     <p>enim ad minima veniam, quis nostrum</p>
                     <p>enim ad minima veniam, quis nostrum</p>
                   </div>
                 
                 <div className='Faq-text-second'>
                 <h3>The Best Financial Accounting</h3>
                     <h3>App Ever!</h3>

                     <p>enim ad minima veniam, quis nostrum</p>
                     <p>enim ad minima veniam, quis nostrum</p>
                 </div>



               </div>


            </div>
              
              

          </div>
            
            <div className='downlaodapp-main'> 
               <div>
                <img  className='downlaod-image' src='/blackimage.svg' alt='download'  height={"400px"}/>
               </div>

            </div>


    </div>
  )
}

export default Testimonial