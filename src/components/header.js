import React, { Component } from 'react';

class header extends Component {
  render() {
    return (
      <div className="header">

        <div className="mobile-nav" id="mNav">
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">Contact Us</a>
        </div>

        <nav>
          <div className="container">
            <div className="logo">
              <div className="logo-icon" />
              <div className="logo-title">
                Design Hub
              </div>
            </div>

            <div className="links">
              <a href="#">About Us</a>
              <a href="#">Services</a>
              <a href="#">Projects</a>
              <a href="#">Contact Us</a>
            </div>

            <div className="mobile-nav-toggle" id="navTog" onClick={toggle}>
              <span></span>
            </div>
          </div>

          <div className="hero">

            <h1>We <strong>Design</strong> & <strong>create</strong></h1>
            <h2>engaging user experiences.</h2>
            <div className="kicker">
              <p>Web Design / User Experience / Branding</p>
            </div>
            <button href="#">learn more</button>

          </div>
          
        </nav>
      </div>
    );
  }
}

var ctr = 0;

function toggle()
{
  var mNav = document.getElementById('mNav');
  var navTog = document.getElementById('navTog');
  if(ctr == 0)
  {
    mNav.classList.add("is-open");
    navTog.classList.add("opened");
    ctr = 1;
    console.log(ctr);
  }
  else if(ctr == 1)
  {
    mNav.classList.remove("is-open");
    navTog.classList.remove("opened");
    ctr = 0;
  }
}




export default header;


