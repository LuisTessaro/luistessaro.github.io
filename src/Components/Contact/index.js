/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './style.scss';

const Contact = () => {
    return (
        <div className="section contact" id="contact">
            <div className="container">
                <div className="title">
                    <h3>Contact</h3>
                    <hr />
                </div>

                <div className="contact-options">
                    <div className="location flex-e">
                        <i className="fa fa-map-marker fa-2x"></i>
                        <p>Brazil, São Paulo</p>
                    </div>

                    <div className="mail flex-e">
                        <i className="fa fa-envelope-o fa-2x"></i>
                        <p>lh.pedrosot@hotmail.com</p>
                    </div>

                    <div className="phone flex-e">
                        <i className="fa fa-phone fa-2x"></i>
                        <p>+55 (11) 97179-4284</p>
                    </div>

                </div>

                <div className="social">
                    <ul>
                        <li className="flex-e">
                            <a href="https://www.facebook.com/luis.tessaro.7" target="_blank" rel="noopener noreferrer"> <i className="fab fa-facebook"></i> </a>
                        </li>
                        <li className="flex-e">
                            <a href="https://github.com/LuisTessaro" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github"></i></a>
                        </li>
                        <li className="flex-e">
                            <a href="https://www.linkedin.com/in/luis-tessaro-36a712150/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"></i> </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Contact