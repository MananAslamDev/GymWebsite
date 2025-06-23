import React from 'react';
import Card from '../common/Card';

const OurStorySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Story</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Founded in 2015, EliteX Fitness was born from a passion for transforming lives through fitness.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img
              src="https://readdy.ai/api/search-image?query=Modern%20gym%20founders%2C%20group%20photo%2C%20dark%20atmosphere%2C%20professional%20photography&width=600&height=400&seq=story1"
              alt="Founders"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <Card className="p-6">
            <Card.Content>
              <Card.Title>Our Mission</Card.Title>
              <Card.Description>
                At EliteX Fitness, we believe in empowering individuals to achieve their highest potential through personalized training, state-of-the-art facilities, and a supportive community. Our journey began with a vision to redefine fitness by combining cutting-edge technology with expert coaching to deliver unparalleled results.
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;