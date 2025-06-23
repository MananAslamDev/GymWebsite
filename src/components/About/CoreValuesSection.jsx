import React from 'react';
import Card from '../common/Card';

const CoreValuesSection = () => {
  const values = [
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do.',
      icon: 'fas fa-star',
    },
    {
      title: 'Community',
      description: 'We build a supportive and inclusive environment for all.',
      icon: 'fas fa-users',
    },
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and methods.',
      icon: 'fas fa-lightbulb',
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty and transparency.',
      icon: 'fas fa-handshake',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Core Values</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            The principles that guide us every day.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="p-6 text-center">
              <Card.Content>
                <i className={`${value.icon} text-primary text-4xl mb-4`}></i>
                <Card.Title>{value.title}</Card.Title>
                <Card.Description>{value.description}</Card.Description>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;