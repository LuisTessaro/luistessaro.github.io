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
                    <Card link="https://github.com/LuisTessaro/Express-Example" imgUrl="https://raw.githubusercontent.com/LuisTessaro/luistessaro.github.io/React-Source/public/img/express.png" title="Express Example" subTitle="Backend Development" />
                    <Card link="https://pland.com.br" imgUrl="https://raw.githubusercontent.com/LuisTessaro/luistessaro.github.io/React-Source/public/img/pland.png" title="PlanD Site" subTitle="Frontend Development" />
                    <Card link="https://github.com/LuisTessaro/luistessaro.github.io" imgUrl="https://raw.githubusercontent.com/LuisTessaro/luistessaro.github.io/React-Source/public/img/cv.png" title="This Site" subTitle="Frontend Development" />
                    <Card link="https://github.com/LuisTessaro/RPG-Telegram-bot" imgUrl="https://raw.githubusercontent.com/LuisTessaro/luistessaro.github.io/React-Source/public/img/dicesmall.png" title="RPG Telegram Bot" subTitle="Bot/Backend/Game Development" />
                    <Card link="https://luistessaro.itch.io/invoker-game" imgUrl="https://raw.githubusercontent.com/LuisTessaro/luistessaro.github.io/React-Source/public/img/invokergamesmall.png" title="Invoker Game" subTitle="Game Development" />
                    <Card link="https://github.com/LuisTessaro/Rust-Dump" imgUrl="https://raw.githubusercontent.com/LuisTessaro/luistessaro.github.io/React-Source/public/img/rust.png" title="Rust Projets" subTitle="Software Development" />
                </div>

            </div>
        </div>
    )
}

export default Portifolio