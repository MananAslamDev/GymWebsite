import React from 'react';
import { Card, CardContent } from '../common/Card';

const contactInfo = [
  {
    icon: 'fa-map-marker-alt',
    title: 'Visit Us',
    details: ['123 Fitness Avenue', 'Seattle, WA 98101'],
  },
  {
    icon: 'fa-phone-alt',
    title: 'Call Us',
    details: ['(206) 555-1234', 'Mon-Sun: 6am-10pm'],
  },
  {
    icon: 'fa-envelope',
    title: 'Email Us',
    details: ['info@elitexfitness.com', 'support@elitexfitness.com'],
  },
];

const ContactInfo = () => {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {contactInfo.map((item, index) => (
        <Card key={index} className="bg-[#222] border-none">
          <CardContent className="pt-6 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-[#FF3A3A] flex items-center justify-center mb-4">
              <i className={`fas ${item.icon} text-xl text-white`}></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <div className="space-y-1 text-white/70">
              {item.details.map((detail, i) => (
                <p key={i}>{detail}</p>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ContactInfo;