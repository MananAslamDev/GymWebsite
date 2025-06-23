import React from 'react';

const timelineItems = [
  {
    year: '2015',
    title: 'The Beginning',
    description: 'EliteX Fitness opens its first location in downtown Seattle with just 5 trainers and a vision for excellence.',
    position: 'left',
  },
  {
    year: '2017',
    title: 'Expansion Begins',
    description: 'After tremendous success, EliteX opens 3 new locations across the West Coast and introduces its signature HIIT program.',
    position: 'right',
  },
  {
    year: '2019',
    title: 'Digital Transformation',
    description: 'Launch of the EliteX mobile app and online coaching platform, bringing our expertise to fitness enthusiasts worldwide.',
    position: 'left',
  },
  {
    year: '2021',
    title: 'National Recognition',
    description: "EliteX Fitness named 'Gym Chain of the Year' and expands to 15 locations across the United States.",
    position: 'right',
  },
  {
    year: '2025',
    title: 'Global Vision',
    description: 'With 25+ locations and a thriving online community, EliteX continues to set the standard for premium fitness experiences.',
    position: 'left',
  },
];

const Timeline = () => {
  return (
    <section className="py-20 bg-[#222]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Journey</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            The evolution of EliteX Fitness from a single location to a fitness empire.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#FF3A3A]"></div>
          <div className="space-y-24 relative">
            {timelineItems.map((item, index) => (
              <div key={index} className={`flex ${item.position === 'left' ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                <div className={`w-1/2 ${item.position === 'left' ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="mb-2">
                    <span className="inline-block bg-[#FF3A3A] text-white px-4 py-1 text-sm font-bold rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#00F0FF] border-4 border-[#1A1A1A] z-10"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;