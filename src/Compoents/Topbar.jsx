import React from "react";
import { NavLink } from "react-router-dom";

import './Topbar.css';

const Topbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        height:'50px',
        justifyContent: "space-between",
        color:"#066aab",
        alignItems:'center'
      }}
    >
      <div style={{ display: "flex", gap: "5px", marginLeft: "5px" }}>
     
        <h2>MAHATMA</h2>
      </div>
      
      <div className={'content'}>

      <NavLink to="/" end  className={'navlink'}> Home</NavLink>
      <NavLink to="/foundation" className={'navlink'}>Foundation</NavLink>
      <NavLink to="/about" className={'navlink'}>About </NavLink>
      <NavLink to="/admission" className={'navlink'}> Admission</NavLink>
      <NavLink to="/career" className={'navlink'}>Career</NavLink>
      </div>
     
    </nav>
  );
};

export default Topbar;
