import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../common/Card';

const coreValues = [
  {
    icon: 'fa-dumbbell',
    title: 'Excellence',
    description: 'We never settle for mediocrity. From our equipment to our trainers, we demand the best.',
  },
  {
    icon: 'fa-users',
    title: 'Community',
    description: 'We foster a supportive environment where members motivate each other to achieve greatness.',
  },
  {
    icon: 'fa-lightbulb',
    title: 'Innovation',
    description: 'We constantly evolve our methods and facilities to stay at the cutting edge of fitness science.',
  },
  {
    icon: 'fa-heart',
    title: 'Passion',
    description: "We're genuinely passionate about fitness and helping our members transform their lives.",
  },
];

const CoreValues = () => {
  return (
    <section className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Core Values</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            The principles that guide everything we do at EliteX Fitness.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <Card key={index} className="bg-[#222] border-none h-full hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-[#FF3A3A] flex items-center justify-center mb-4">
                  <i className={`fas ${value.icon} text-2xl text-white`}></i>
                </div>
                <CardTitle className="text-2xl text-white">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 text-center">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;