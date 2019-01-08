import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
        <div className="Projects">
            <div className="container">
            
                <div className="project-header">
                    <h3>Our Projects</h3>
                    
                    <div className="page-select">
                        <span className="active"></span>
                    </div>
                </div>

                <div className="project-content">
                    <div className="project1">
                        <div className="project1-wrapper">
                            <h3>IXXEL POWER CO.</h3>
                            <h4>Web Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur, enim eu bibendum facilisis, sapien neque aliquam leo, ac bibendum enim magna et felis. </p>
                        </div>
                    </div>
                    <div className="project-samples">
                        <div className="project2" />
                        <div className="project3" />
                    </div>
                </div>

            </div>
        </div>
    );
  }
}

export default Projects;
