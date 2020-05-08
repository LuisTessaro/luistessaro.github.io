import React from 'react';

import './styles/tailwind.css';

import './index.scss';

import Header from './Components/Header'
import Hero from './Components/Hero'
import Portfolio from './Components/Portfolio'
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
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
