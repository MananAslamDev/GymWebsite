import React from 'react';

const MobileMenu = ({ activeTab, setActiveTab, setIsMenuOpen }) => {
  return (
    <div className="md:hidden bg-background shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col space-y-4">
          {['home', 'about', 'programs', 'trainers', 'contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setIsMenuOpen(false);
              }}
              className={`text-white hover:text-primary transition-colors py-2 ${activeTab === tab ? 'text-primary' : ''}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
          <button className="bg-primary hover:bg-primary/80 text-white w-full px-4 py-2 rounded-button whitespace-nowrap cursor-pointer">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;