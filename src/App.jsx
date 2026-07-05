// src/App.jsx
import React from 'react';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Stats from './components/sections/Stats';
import Testimonials from './components/sections/Testimonials';
import Comparison from './components/sections/Comparison';
import FinalCTA from './components/sections/FinalCTA';

function App() {
  return (
    <main className="font-sans antialiased">
      <Hero />
      <Services />
      <Stats/>
      <Comparison />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}

export default App;