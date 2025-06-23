import React from 'react';

const TimelineSection = () => {
  const timeline = [
    { year: 2015, event: 'EliteX Fitness founded in Seattle, WA.' },
    { year: 2017, event: 'Opened second location with advanced training facilities.' },
    { year: 2019, event: 'Launched signature HIIT Revolution program.' },
    { year: 2021, event: 'Introduced virtual training platform.' },
    { year: 2023, event: 'Expanded to five locations nationwide.' },
  ];

  return (
    <section className="py-20 bg-[#111]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Journey</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Key milestones in the growth of EliteX Fitness.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full"></div>
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className="w-1/2 px-4">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-white">{item.year}</h3>
                  <p className="text-white/70">{item.event}</p>
                </div>
              </div>
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;