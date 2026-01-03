import React from "react";
import goal from "../assets/careerimg.png";
import "./Career.css";

const Career = () => {
  return (
    <div>
      <div className="img-career"></div>
      <div className="cont1">
        <div className="bordering" >
          <h2>Find your Purpose</h2>
        </div>

        <div className="bordering">
          <h2>Master your Passion</h2>
        </div>
        <div className="bordering">
         <h2>Thrive and Prosper</h2> 
        </div>
        </div>
        <div className="parag">
          <p style={{paddingLeft:"70px",paddingRight:"70px", fontWeight:'bolder'}}>Mahatma Schools, with its serene aura, serves as the right place to establish one’s professional and social self. With ever flourishing work habits, we focus on providing standard outcomes to the multiplicity of learners. We are open to minds that are busy being productive. If you identify yourself as one, you have landed at the right site.</p>
        </div>
        <div className="apply">
         <h1>APPLY NOW!</h1>
         <div className="label">
              <label htmlFor="name" style={{fontSize:"20px"}}>Name:</label><br />  <br />
           <input type="text" style={{padding:"10px",borderRadius:"8px",border:"1px solid gray",fontSize:"16px",marginTop:"5px",width:"400px"}} />
          </div>
          <div className="label">
               <label htmlFor="name" style={{fontSize:"20px"}}>Username:</label><br />  <br />
           <input type="text" style={{padding:"10px",borderRadius:"8px",border:"1px solid gray",fontSize:"16px",marginTop:"5px",width:"400px"}} />
          </div>
         
        

          <div className="label">
              <label htmlFor="name"  style={{fontSize:"20px"}}>Password:</label><br /><br />
           <input type="password" id="password" style={{padding:"10px",borderRadius:"8px",border:"1px solid gray",fontSize:"16px",marginTop:"5px",width:"400px"}} />
         </div>
          <div className="label">
              <label htmlFor="name"  style={{fontSize:"20px"}}>MobileNumber:</label><br /><br />
           <input type="text" style={{padding:"10px",borderRadius:"8px",border:"1px solid gray",fontSize:"16px",marginTop:"5px",width:"400px"}} />
         </div>
         <div>
          
         </div>
          {/* <div className="label">
              <label htmlFor="name"  style={{fontSize:"20px"}}>Year of Gratuation:</label><br /><br />
           <input type="text" style={{padding:"10px",borderRadius:"8px",border:"1px solid gray",fontSize:"16px",marginTop:"5px",width:"400px"}} />
         </div>
          <div className="label">
              <label htmlFor="name"  style={{fontSize:"20px"}}>Gender:</label><br /><br />
           <input type="text" style={{padding:"10px",borderRadius:"8px",border:"1px solid gray",fontSize:"16px",marginTop:"5px",width:"400px"}} />
         </div>
          <div className="label">
              <label htmlFor="name"  style={{fontSize:"20px"}}>Experience in Year:</label><br /><br />
           <input type="text" style={{padding:"10px",borderRadius:"8px",border:"1px solid gray",fontSize:"16px",marginTop:"5px",width:"400px"}}/>
         </div>
           */}
        </div>
      </div>
   
  );
};

export default Career;
