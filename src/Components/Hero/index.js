import React from 'react';
import './style.scss';

import Typewriter from 'typewriter-effect';


const Hero = () => {
    return (
        <div className="section hero">
            <div className="container flex align-center justify-between items-center">
                <div className="introduction-text">
                    <p>Hello,</p>
                    <h1>I am <span className="introduce-me">Luís Tessaro</span></h1>
                    <h3 className="introduce-typewriter">
                        <Typewriter
                            options={{
                                strings: ['Backend Developer', 'Frontend Developer', 'Game Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h3>
                    <h5>NodeJS, MongoDB, React, Vue, CSS, C/C#/C++, Java, Python, SQL among some other ones that I dont care as much.</h5>
                    <div className="resume">
                        <a className="btn" href="https://drive.google.com/open?id=0B1iOhYqSpMq2V1gzUllnN1dvZXM" target="_blank">
                            My Resume
                        </a>
                    </div>
                </div>
                <div className="introduction-image" >
                    <div></div>
                    <img src="https://raw.githubusercontent.com/LuisTessaro/luistessaro.github.io/React-Source/public/img/AboutImg.jpg" alt="my hero"></img>
                </div>

            </div>
        </div>
    )
}

export default Hero