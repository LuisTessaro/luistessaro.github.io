import React from 'react';
import './style.scss';

import Card from './Card'

const Portifolio = () => {
    return (
        <div className="section portfolio">
            <div id="portfolio"></div>
            <div className="container">
                <div className="title">
                    <h3>Portfolio</h3>
                    <hr />
                </div>

                <div className="cards w-full">
                    <Card link="https://github.com/LuisTessaro/gadablog-react-frontend" imgUrl="/img/blog.png" title="Personal Blog" subTitle="Fullstack Development" />
                    <Card link="https://github.com/LuisTessaro/webtoapp-spotify-api" imgUrl="/img/Spotify.png" title="Spotify URL minifier and converter to URI" subTitle="Backend Development" />
                    <Card link="https://pland.com.br" imgUrl="/img/pland.png" title="PlanD Site" subTitle="Frontend Development" />
                    <Card link="https://github.com/LuisTessaro/Express-Example" imgUrl="/img/express.png" title="Express Example" subTitle="Backend Development" />
                    <Card link="https://github.com/LuisTessaro/luistessaro.github.io" imgUrl="/img/cv.png" title="This Site" subTitle="Frontend Development" />
                    <Card link="https://github.com/LuisTessaro/RPG-Telegram-bot" imgUrl="/img/dicesmall.png" title="RPG Telegram Bot" subTitle="Bot/Backend/Game Development" />
                </div>

            </div>
        </div>
    )
}

export default Portifolio