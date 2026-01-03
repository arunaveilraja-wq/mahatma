import React from 'react'
import { NavLink } from 'react-router-dom'
import './Compoents/Sidenav.css'

const Sidenav = () => {
  return (
    <div className={'sidehead'}>
    <NavLink to="/school fee" className={'side'} style={{backgroundColor:'blue'}}>School fee</NavLink>
    <NavLink to="/admission" className={'side'} style={{backgroundColor:'green'}}>Admission</NavLink>
    <NavLink to="/spot light" className={'side'} style={{backgroundColor:'yellow'}}>Spot light</NavLink>
    </div>
  )
}

export default Sidenav