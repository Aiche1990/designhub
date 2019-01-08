import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
        <div className="Contact">
            <div className="container">
                <h3>get in <strong>touch</strong> with <strong>us</strong></h3>

                <div className="contact-wrapper">
                
                    <div className="contact-desc">
                        <div className="desc">
                            <div className="desc-title">
                                <div className="icon-1" />
                                <h4>location</h4>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur, enim.
                            </p>
                        </div>
                        <div className="desc">
                            <div className="desc-title">
                                <div className="icon-2" />
                                <h4>contact</h4>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur, enim.
                            </p>
                        </div>
                        <div className="desc">
                            <div className="desc-title">
                                <div className="icon-3" />
                                <h4>email</h4>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur, enim.
                            </p>
                        </div>
                    </div>
                    
                    <div className="contact-message">
                        <h4>message us</h4>
                        <form>
                            <input type="text" placeholder="Name"/>
                            <input type="text" placeholder="Email"/>
                            <textarea type="textarea" className="message" placeholder="Message"/>
                            <button>Submit</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    );
  }
}

export default Contact;
