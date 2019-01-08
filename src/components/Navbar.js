import React, { Component } from 'react';
import {NavLink} from "react-router-dom";


class Navbar extends Component {
  render() {
    return (
        <div className="header" id="header">

          <nav>

            <div className="mobile-nav" id="mNav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </div>

            <div className="container">
              <div className="logo">
                <div className="logo-icon" />
                <div className="logo-title">
                  Design Hub
                </div>
              </div>

              <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
              </div>

              <div className="mobile-nav-toggle" id="navTog" onClick={toggle}>
                <span></span>
              </div>
            </div>

            </nav>
          </div>
    );
  }
}

var ctr = 0;

const toggle = () =>{

  let mNav = document.getElementById('mNav');
  let navTog = document.getElementById('navTog');
  if(ctr === 0)
  {
    mNav.classList.add("is-open");
    navTog.classList.add("opened");
    ctr = 1;
    console.log(ctr);
  }
  else if(ctr === 1)
  {
    mNav.classList.remove("is-open");
    navTog.classList.remove("opened");
    ctr = 0;
  }
}




export default Navbar;


