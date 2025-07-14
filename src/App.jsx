import React, { useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Art from './pages/Art';
import Coding from './pages/Coding';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Games from './pages/Games'; 

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/art" element={<Art />} />
        <Route path="/coding" element={<Coding />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  // useEffect(() => {
  //   const theme = localStorage.getItem('theme');
  //   if (theme === 'dark') document.documentElement.classList.add('dark');
  // }, []);

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