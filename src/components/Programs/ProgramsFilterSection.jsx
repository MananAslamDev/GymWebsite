import React, { useState } from 'react';
import Tabs from '../common/Tabs';
import Card from '../common/Card';
import Button from '../common/Button';

const ProgramsFilterSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Programs' },
    { id: 'strength', label: 'Strength' },
    { id: 'cardio', label: 'Cardio' },
    { id: 'flexibility', label: 'Flexibility' },
  ];

  const programs = [
    {
      id: 1,
      name: 'Power Lifting',
      category: 'strength',
      description: 'Build raw strength with our expert-led power lifting program.',
      image: 'https://readdy.ai/api/search-image?query=Power%20lifting%20in%20a%20modern%20gym%2C%20athlete%20lifting%20heavy%20barbell%2C%20dark%20atmosphere%2C%20high-quality%20photography&width=600&height=400&seq=program1',
    },
    {
      id: 2,
      name: 'HIIT Revolution',
      category: 'cardio',
      description: 'High-intensity interval training to torch calories and boost endurance.',
      image: 'https://readdy.ai/api/search-image?query=HIIT%20workout%20in%20a%20modern%20gym%2C%20group%20class%2C%20dynamic%20movements%2C%20dark%20atmosphere%2C%20high-quality%20photography&width=600&height=400&seq=program2',
    },
    {
      id: 3,
      name: 'Yoga Flow',
      category: 'flexibility',
      description: 'Enhance flexibility and mental clarity with our yoga sessions.',
      image: 'https://readdy.ai/api/search-image?query=Yoga%20class%20in%20a%20modern%20studio%2C%20calm%20atmosphere%2C%20athletes%20in%20poses%2C%20high-quality%20photography&width=600&height=400&seq=program3',
    },
  ];

  const filteredPrograms =
    activeFilter === 'all'
      ? programs
      : programs.filter((program) => program.category === activeFilter);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore Our Programs
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Filter by category to find the perfect program for you.
          </p>
        </div>
        <Tabs tabs={filters} activeTab={activeFilter} setActiveTab={setActiveFilter} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <Card key={program.id} className="p-6">
              <Card.Header>
                <img
                  src={program.image}
                  alt={program.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </Card.Header>
              <Card.Content>
                <Card.Title>{program.name}</Card.Title>
                <Card.Description>{program.description}</Card.Description>
              </Card.Content>
              <Card.Footer>
                <Button className="bg-primary hover:bg-primary/80 text-white w-full">
                  Learn More
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsFilterSection;