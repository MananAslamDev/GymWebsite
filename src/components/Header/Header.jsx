import React from 'react';
import MobileMenu from './MobileMenu';

const Header = ({ activeTab, setActiveTab, isScrolled, isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-white flex items-center">
              <span className="text-primary">Elite</span>
              <span className="text-secondary">X</span>
              <span> Fitness</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'programs', 'trainers', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-white hover:text-primary transition-colors ${activeTab === tab ? 'text-primary' : ''}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className="hidden md:block">
            <button className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-button whitespace-nowrap cursor-pointer">
              Join Now
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white text-2xl focus:outline-none cursor-pointer"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <MobileMenu activeTab={activeTab} setActiveTab={setActiveTab} setIsMenuOpen={setIsMenuOpen} />
      )}
    </header>
  );
};

export default Header;