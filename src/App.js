import React from 'react';

import './styles/tailwind.css';

import './index.scss';

import Header from './Components/Header'
import Hero from './Components/Hero'
import Portifolio from './Components/Portifolio'
import Contact from './Components/Contact'
import About from './Components/About'

import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Portifolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
