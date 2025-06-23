import React from 'react';

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 py-2 rounded-button text-white ${
            activeTab === tab.id ? 'bg-primary' : 'bg-[#333] hover:bg-primary/80'
          } transition-colors`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;