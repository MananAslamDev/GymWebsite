import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';

const TrainerSpotlightSection = () => {
  const spotlightTrainer = {
    name: 'John Smith',
    specialty: 'Strength Training',
    bio: 'With over 10 years of experience, John has helped hundreds of clients achieve their strength goals through personalized training programs.',
    image: 'https://readdy.ai/api/search-image?query=Professional%20male%20fitness%20trainer%2C%20dark%20gym%2C%20confident%20pose%2C%20high-quality%20photography&width=600&height=400&seq=trainer1',
  };

  return (
    <section className="py-20 bg-[#111]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trainer Spotlight
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Meet one of our top trainers making a difference.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img
              src={spotlightTrainer.image}
              alt={spotlightTrainer.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <Card className="p-6">
            <Card.Content>
              <Card.Title>{spotlightTrainer.name}</Card.Title>
              <p className="text-white/70 mb-4">{spotlightTrainer.specialty}</p>
              <Card.Description>{spotlightTrainer.bio}</Card.Description>
            </Card.Content>
            <Card.Footer>
              <Button className="bg-primary hover:bg-primary/80 text-white w-full">
                Book a Session
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrainerSpotlightSection;