import React from 'react';
import './index.scss';


import Header from './Components/Header'
import Hero from './Components/Hero'
import Portifolio from './Components/Portifolio'
import Contact from './Components/Contact'

import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        {/* <Portifolio /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
