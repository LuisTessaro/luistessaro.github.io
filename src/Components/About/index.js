import React from 'react'

import './style.scss'

export default () => {
  return (
    <div className="section about" style={{ minHeight: '50vh' }}>
      <div id="about" />
      <div className="container py-8">
        <h1 className="title text-main font-bold text-6xl">Langs and Frameworks</h1>
        <p className="content text-white p-1 text-3xl">- NodeJS, React, Express, MongoDB, Vue, CSS, SASS, C/C#, Python, SQL, VisualBasic.net.</p>

        <h1 className="title text-main font-bold text-6xl">Hobbies</h1>
        <p className="content text-white p-1 text-3xl">- Board and video game developer, world class World of Warcraft player, IOT tinkerer.</p>

        <h1 className="title text-main font-bold text-6xl">Front Experience</h1>
        <p className="content text-white p-1 text-3xl">- Curenty working <a className="text-main" href="https://pland.com.br/" target="_blank">@PlanD</a> developing everything frontend from products to websites.</p>
        <p className="content text-white p-1 text-3xl">- Multiple freelances and personal projets.</p>

        <h1 className="title text-main font-bold text-6xl">Backend Experience</h1>
        <p className="content text-white p-1 text-3xl">- 1 year intership <a className="text-main" href="http://www.mokamind.com.br/" target="_blank">@Mokamind</a> developing IOT related backends.</p>
        <p className="content text-white p-1 text-3xl">- Multiple freelances and personal projets.</p>
        <p className="content text-white p-1 text-3xl">- CS major with distributed computing courses.</p>
      </div>
    </div>
  )
}