import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';

const ContactMembershipSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact & Membership
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Reach out to us or explore our membership plans.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="p-6">
            <Card.Header>
              <Card.Title>Contact Us</Card.Title>
            </Card.Header>
            <Card.Content>
              <div className="space-y-4">
                <div>
                  <label className="block text-white/70 mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-[#333] text-white p-2 rounded"
                  />
                </div>
                <div>
                  <label className="block text-white/70 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-[#333] text-white p-2 rounded"
                  />
                </div>
                <div>
                  <label className="block text-white/70 mb-1">Message</label>
                  <textarea
                    placeholder="Your message"
                    className="w-full bg-[#333] text-white p-2 rounded h-24"
                  ></textarea>
                </div>
                <Button className="bg-primary hover:bg-primary/80 text-white w-full">
                  Send Message
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card className="p-6">
            <Card.Header>
              <Card.Title>Membership Plans</Card.Title>
            </Card.Header>
            <Card.Content>
              <div className="space-y-6">
                {[
                  {
                    plan: 'Basic',
                    price: '$49/month',
                    features: ['Gym access', 'Group classes'],
                  },
                  {
                    plan: 'Pro',
                    price: '$99/month',
                    features: ['Gym access', 'Group classes', 'Personal training'],
                  },
                  {
                    plan: 'Elite',
                    price: '$149/month',
                    features: ['Gym access', 'Group classes', 'Personal training', 'Nutrition plan'],
                  },
                ].map((plan, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-bold text-white">{plan.plan}</h4>
                    <p className="text-primary text-lg">{plan.price}</p>
                    <ul className="text-white/70 text-sm space-y-1">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <i className="fas fa-check text-primary mr-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card.Content>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactMembershipSection;