import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';

const TrainersSection = () => {
  const trainers = [
    {
      id: 1,
      name: 'John Smith',
      specialty: 'Strength Training',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20fitness%20trainer%2C%20dark%20gym%2C%20confident%20pose%2C%20high-quality%20photography&width=400&height=400&seq=trainer1',
    },
    {
      id: 2,
      name: 'Emma Johnson',
      specialty: 'Yoga & Mobility',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20fitness%20trainer%2C%20dark%20gym%2C%20confident%20pose%2C%20high-quality%20photography&width=400&height=400&seq=trainer2',
    },
    {
      id: 3,
      name: 'Mike Brown',
      specialty: 'HIIT & Cardio',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20fitness%20trainer%2C%20dark%20gym%2C%20confident%20pose%2C%20high-quality%20photography&width=400&height=400&seq=trainer3',
    },
  ];

  return (
    <section className="py-20 bg-[#111]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our Elite Trainers
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Our certified professionals are here to guide you every step of the way.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <Card key={trainer.id} className="p-6">
              <Card.Header>
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </Card.Header>
              <Card.Content>
                <Card.Title>{trainer.name}</Card.Title>
                <Card.Description>{trainer.specialty}</Card.Description>
              </Card.Content>
              <Card.Footer>
                <Button className="bg-primary hover:bg-primary/80 text-white w-full">
                  View Profile
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;