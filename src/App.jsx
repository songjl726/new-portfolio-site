import React, { useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects'; 
import Art from './pages/Art';
import About from './pages/About'; 
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/art" element={<Art />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* main grows to fill leftover space */}
      <main className="flex-grow px-4 py-6">
        <AnimatedRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;