import React from 'react';
import './style.scss';

import Card from './Card'

const Portifolio = () => {
    return (
        <div className="section portifolio">
            <div id="portifolio"></div>
            <div className="container">
                <div className="title">
                    <h3>Portifolio</h3>
                    <hr />
                </div>

                <div className="cards">
                    <Card link="https://github.com/LuisTessaro/Express-Example" imgUrl="/img/express.png" title="Express Example" subTitle="Web Development" />
                    <Card link="https://github.com/LuisTessaro/Express-Example" imgUrl="/img/express.png" title="Express Example" subTitle="Web Development" />
                    <Card link="https://github.com/LuisTessaro/Express-Example" imgUrl="/img/express.png" title="Express Example" subTitle="Web Development" />
                    <Card link="https://github.com/LuisTessaro/Express-Example" imgUrl="/img/express.png" title="Express Example" subTitle="Web Development" />
                    <Card link="https://github.com/LuisTessaro/Express-Example" imgUrl="/img/express.png" title="Express Example" subTitle="Web Development" />
                    <Card link="https://github.com/LuisTessaro/Express-Example" imgUrl="/img/express.png" title="Express Example" subTitle="Web Development" />
                    <Card link="https://github.com/LuisTessaro/Express-Example" imgUrl="/img/express.png" title="Express Example" subTitle="Web Development" />
                    <Card link="https://github.com/LuisTessaro/Express-Example" imgUrl="/img/express.png" title="Express Example" subTitle="Web Development" />
                </div>

            </div>
        </div>
    )
}

export default Portifolio