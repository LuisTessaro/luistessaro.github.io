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

                <div className="cards w-full">
                    <Card link="https://github.com/LuisTessaro/Express-Example" imgUrl="/img/express.png" title="Express Example" subTitle="Backend Development" />
                    <Card link="https://pland.com.br" imgUrl="/img/pland.png" title="PlanD Site" subTitle="Frontend Development" />
                    <Card link="https://github.com/LuisTessaro/luistessaro.github.io" imgUrl="/img/cv.png" title="This Site" subTitle="Frontend Development" />
                    <Card link="https://github.com/LuisTessaro/RPG-Telegram-bot" imgUrl="/img/dicesmall.png" title="RPG Telegram Bot" subTitle="Bot/Backend/Game Development" />
                    <Card link="https://luistessaro.itch.io/invoker-game" imgUrl="/img/invokergamesmall.png" title="Invoker Game" subTitle="Game Development" />
                    <Card link="https://github.com/LuisTessaro/Rust-Dump" imgUrl="/img/rust.png" title="Rust Projets" subTitle="Software Development" />
                </div>

            </div>
        </div>
    )
}

export default Portifolio