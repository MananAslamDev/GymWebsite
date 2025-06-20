import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../common/Button';

const Header = ({ isScrolled, isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/programs', label: 'Programs' },
    { path: '/trainers', label: 'Trainers' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1A1A1A] shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white flex items-center">
              <span className="text-[#FF3A3A]">Elite</span>
              <span className="text-[#00F0FF]">X</span>
              <span> Fitness</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-white hover:text-[#FF3A3A] transition-colors ${location.pathname === item.path ? 'text-[#FF3A3A]' : ''}`}
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-[#FF3A3A] hover:bg-[#FF3A3A]/80 text-white !rounded-button whitespace-nowrap cursor-pointer">
              Join Now
            </Button>
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
        <div className="md:hidden bg-[#1A1A1A] shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-white hover:text-[#FF3A3A] transition-colors py-2 ${location.pathname === item.path ? 'text-[#FF3A3A]' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="bg-[#FF3A3A] hover:bg-[#FF3A3A]/80 text-white w-full !rounded-button whitespace-nowrap cursor-pointer">
                Join Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;