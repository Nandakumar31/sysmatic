import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Screens/Home';
import { Route, Routes } from 'react-router-dom';
import Services from './Screens/Services';
import TrainingPlacement from './Screens/TrainingPlacement';
import About from './Screens/About';
import Contact from './Screens/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/TrainingPlacement" element={<TrainingPlacement />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
