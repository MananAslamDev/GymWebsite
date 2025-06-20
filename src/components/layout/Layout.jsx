import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ isScrolled, isMenuOpen, setIsMenuOpen, children }) => {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      <Header isScrolled={isScrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;