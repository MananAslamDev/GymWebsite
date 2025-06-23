import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Programs from './components/Programs/Programs';
import Trainers from './components/Trainers/Trainers';
import Contact from './components/Contact/Contact';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-white">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main className="pt-20">
        {activeTab === 'home' && <Home />}
        {activeTab === 'about' && <About />}
        {activeTab === 'programs' && <Programs />}
        {activeTab === 'trainers' && <Trainers />}
        {activeTab === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
};

export default App;