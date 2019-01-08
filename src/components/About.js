import React, { Component } from 'react';


class about extends Component {
  render() {
    return (
      <div className="about" id="#about">
        <div className="container">
            <div className="about-us">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur, enim eu bibendum facilisis, sapien neque aliquam leo, ac bibendum enim magna et felis.</p> 
                <p>Nam consectetur nunc ut erat volutpat, non mattis urna accumsan. In hac habitasse platea dictumst. Duis massa felis, elementum lacinia condimentum at, tristique ut turpis.</p> 
                <p>Donec sed turpis mauris. Fusce quis tempor nisl. Nulla facilisi. Nam lacinia eget erat sagittis maximus.</p>
            </div>

            <div className="desc">
                <div className="mottos">
                    <h3>Innovation</h3>
                    <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Suspendisse consectetur, enim eu bibendum facilisis, 
                    sapien neque aliquam leo, ac bibendum enim magna et felis.</p>
                    <hr />
                </div>
                <div className="mottos">
                    <h3>Mision</h3>
                    <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Suspendisse consectetur, enim eu bibendum facilisis, 
                    sapien neque aliquam leo, ac bibendum enim magna et felis.</p>
                    <hr />
                </div>
                <div className="mottos">
                    <h3>Vision</h3>
                    <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Suspendisse consectetur, enim eu bibendum facilisis, 
                    sapien neque aliquam leo, ac bibendum enim magna et felis.</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default about;
