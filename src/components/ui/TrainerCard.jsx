import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../common/Card';
import { Button } from '../common/Button';

const TrainerCard = ({ trainer }) => {
  return (
    <div className="flip-card h-[450px] w-full perspective-1000">
      <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d hover:rotate-y-180">
        <div className="flip-card-front absolute w-full h-full backface-hidden">
          <Card className="w-full h-full bg-[#1A1A1A] border-none overflow-hidden">
            <div className="h-[320px] overflow-hidden">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl text-white">{trainer.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#00F0FF]">{trainer.specialty}</p>
            </CardContent>
          </Card>
        </div>
        <div className="flip-card-back absolute w-full h-full backface-hidden rotate-y-180">
          <Card className="w-full h-full bg-[#1A1A1A] border-none flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-2xl text-white">{trainer.name}</CardTitle>
              <p className="text-[#00F0FF]">{trainer.specialty}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold">Experience</h4>
                  <p className="text-white/70">{trainer.experience}</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Certifications</h4>
                  <p className="text-white/70">{trainer.certifications.join(', ')}</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Availability</h4>
                  <p className="text-white/70">Mon-Fri: 8am-7pm</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#FF3A3A] hover:bg-[#FF3A3A]/80 text-white !rounded-button whitespace-nowrap cursor-pointer">
                Book Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;