import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Services extends Component {
  render() {
    return (
        <div className="Services">
            <div className="container">
                <div className="service-wrapper">
                    
                    <div className="service-list">
                        <h2>Our services</h2>
                        <h3>Web Development<span></span></h3>
                        <h3 className="active">Web Design<span></span></h3>
                        <h3>Web Branding<span></span></h3>
                        <h3>Web UI / UX Design<span></span></h3>
                    </div>

                    <div className="service-preview">
                        <div className="service-bg" />
                        <div className="service-desc">
                            <div className="service-title">Web Design</div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur, enim eu bibendum facilisis, sapien neque aliquam leo, ac bibendum enim magna et felis. 
                            </p>
                            <NavLink to="/about">Learn More</NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
  }
}

export default Services;
