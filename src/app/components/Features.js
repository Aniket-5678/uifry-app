import React from "react";
import "../components/style/style.css";
import { GiStarShuriken } from "react-icons/gi";
import { GiStarSattelites } from "react-icons/gi";
import { GoInbox } from "react-icons/go";
import { FaBell } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";


const Features = () => {
  return (
    <div className="feature-container">
      <div className="features-main">
        <div className="features-first-main">
         
          <div className="ring-image">
            <img src="ring.svg" alt="ring" height={"700px"} />
          </div>
       

          <div className="feture-first-content">
            <div className="feature-heading">
              <h3>Features</h3>
              <h2>Uifry Premium</h2>
            </div>

            <div className="feature-icons">
              <h4>
              
                <GiStarShuriken /> 
                       Budgeting intervals
              </h4>
              <p>labore et dolore magna aliqua. Ut enim</p>
              <p>Sed ut perspiciatis unde omnis iste nat</p>
            </div>

            <div className="feature-icons">
              <h4>
               
                <GiStarSattelites />
                Budgeting intervals
              </h4>
              <p>labore et dolore magna aliqua. Ut enim</p>
              <p>Sed ut perspiciatis unde omnis iste nat</p>
            </div>

            <div className="feature-icons">
              <h4>
           
                <GoInbox />
                Budgeting intervals
              </h4>
              <p>labore et dolore magna aliqua. Ut enim</p>
              <p>Sed ut perspiciatis unde omnis iste nat</p>
            </div>
          </div>
        </div>

        <div className="Advantage-main">
          <div className="avdvantage-content-main">
            <div className="advantage-heading-main">
              
              <div className="advantage-text">
                <h3>Advantage</h3>
                <h2>Why Choose Urify</h2>
              </div>

              <div className="advantage-icons">
                <h3> <FaBell/>  Clever Notifications</h3>
                <p>voluptatem accusantium doloremque laudantium Nemo enim ipsam voluptatem quia voluptas sit </p>
                <p>voluptatem accusantium doloremque laudantium Nemo enim ipsam voluptatem quia voluptas sit</p>
                <p>voluptatem accusantium doloremque laudantium Nemo enim ipsam voluptatem quia voluptas sit</p>

              </div>


            </div>
            <div className="advantage-image-main">
                  <img src="/advantagering.svg" height={"700px"} />
              </div>
          </div>
        </div>
         
         <div className="feature-third">
              <div className="third-content">
                <img src="/thirdfeature.svg" height={"700px"} />
              </div> 

              <div className="third-image">
                 <h2> <PiStarFourFill/> Fully Customizable</h2>
                 <div className="lorem">
                 <p>dolorem ipsum quia dolor sit amet, consectetur, adipisci </p>
                 <p>dolorem ipsum quia dolor sit amet, consectetur, adipisci </p>
                 <p>dolorem ipsum quia dolor sit amet, consectetur, adipisci </p>
                 <p>dolorem ipsum quia dolor sit amet, consectetur, adipisci</p>
                 </div>
                 
              </div>
         </div>

      </div>
    </div>
  );
};

export default Features;
