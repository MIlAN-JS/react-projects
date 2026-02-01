import React from 'react'
import "./nav.scss"
import DateTime from './DateTime';

const Navbar = () => {
  return (
   

    <nav>
        <div className="left-nav">
           <i className="ri-apple-line"></i>
            <small>Milan Codes</small>
            <small>File</small>
            <small>Window</small>
            <small>Terminal</small>
        </div>

        <div className="right-nav">
           <i className="ri-wifi-line"></i>
            <DateTime/>
        </div>

    </nav>
  )}


export default Navbar;