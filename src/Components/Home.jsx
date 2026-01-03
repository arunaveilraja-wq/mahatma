import React from "react";
import picture from "../assets/student1.jpg";
import "./Home.css";
 import picturee from "../assets/image14.png";
 import About from "./About";
 import Admission from "./Admission";
 import Foundation from "./Foundation";
 import Career from "./Career";

const Home = () => {
  return (
    <div>
    <div className="img-container">
      
      <div className="title">
        <p >STRIVE - Sports To </p>
        <p>Rejuvenate and Ignite our</p>
         <p>Valour and Energy</p>
      </div>  
    </div>
    <div className='page1'>
      <div className="para">
     <h1>Truth Trumphs</h1>
      <p >Mahatma: a group of schools founded in the year 1983 in Madurai. Mahatma offers a rich experience for children by offering value-based education which inculcates confidence, intellectual curiosity, harmony and creativity to become renowned citizens of tomorrow.</p>
      </div>
      
     <div className="pict">
        <img src={picturee} alt="image" width={'100%'} height={'100%'} />
    </div>
    
    </div>
        <About />
         <Admission />
          <Foundation />
           <Career />
   
    </div>
    
  );
  
  
};

export default Home;
