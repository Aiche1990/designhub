import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Home extends Component {
  render() {
    return (
        <div className="hero">
            <div className="container">
                <h1>We <strong>Design</strong> & <strong>create</strong></h1>
                <h2>engaging user experiences.</h2>
                <div className="kicker">
                    <p>Web Design / User Experience / Branding</p>
                </div>
                <NavLink to="/about"><button>learn more</button></NavLink> 
            </div>
      </div>
    );
  }
}

export default Home;
