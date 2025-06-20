import React from 'react';
import { Input } from '../common/Input';
import { Button } from '../common/Button';

const Footer = () => {
  return (
    <footer className="bg-[#111] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <a href="#" className="text-3xl font-bold text-white flex items-center mb-6">
              <span className="text-[#FF3A3A]">Elite</span>
              <span className="text-[#00F0FF]">X</span>
              <span> Fitness</span>
            </a>
            <p className="text-white/70 mb-6">
              Transforming lives through premium fitness experiences since 2015.
            </p>
            <div className="flex space-x-4">
              {['facebook-f', 'instagram', 'twitter', 'youtube'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center text-white hover:bg-[#FF3A3A] transition-colors cursor-pointer"
                >
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Programs', 'Trainers', 'Membership', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-[#FF3A3A] transition-colors cursor-pointer">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-[#FF3A3A] mt-1 mr-3"></i>
                <span className="text-white/70">123 Fitness Avenue, Seattle, WA 98101</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt text-[#FF3A3A] mt-1 mr-3"></i>
                <span className="text-white/70">(206) 555-1234</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope text-[#FF3A3A] mt-1 mr-3"></i>
                <span className="text-white/70">info@elitexfitness.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock text-[#FF3A3A] mt-1 mr-3"></i>
                <div className="text-white/70">
                  <p>Monday-Friday: 6am-10pm</p>
                  <p>Saturday-Sunday: 8am-8pm</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for fitness tips, exclusive offers, and more.
            </p>
            <div className="flex mb-4">
              <Input
                placeholder="Your email address"
                className="bg-[#333] border-none text-white rounded-r-none"
              />
              <Button className="bg-[#FF3A3A] hover:bg-[#FF3A3A]/80 text-white rounded-l-none !rounded-button whitespace-nowrap cursor-pointer">
                Subscribe
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {['cc-visa', 'cc-mastercard', 'cc-amex', 'cc-paypal'].map((icon) => (
                <div key={icon} className="flex items-center justify-center bg-[#333] p-2 rounded">
                  <i className={`fab fa-${icon} text-2xl text-white`}></i>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[#333] mt-12 pt-8 text-center">
          <p className="text-white/50">
            © {new Date().getFullYear()} EliteX Fitness. All rights reserved. |{' '}
            <a href="#" className="text-white/50 hover:text-[#FF3A3A] ml-1 cursor-pointer">
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href="#" className="text-white/50 hover:text-[#FF3A3A] ml-1 cursor-pointer">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;