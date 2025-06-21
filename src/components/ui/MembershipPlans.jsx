import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../common/Card';
import { Button } from '../common/Button';

const membershipPlans = [
  {
    name: 'Basic',
    price: '$49',
    color: '#333',
    features: [
      'Access to gym facilities',
      'Basic fitness assessment',
      'Access to group classes',
      'Locker room access',
      'Mobile app access',
    ],
  },
  {
    name: 'Premium',
    price: '$89',
    color: '#00F0FF',
    features: [
      'All Basic features',
      'Unlimited group classes',
      '1 personal training session/month',
      'Nutrition consultation',
      'Guest passes (2/month)',
      'Priority class booking',
    ],
  },
  {
    name: 'Elite',
    price: '$149',
    color: '#FF3A3A',
    features: [
      'All Premium features',
      '4 personal training sessions/month',
      'Quarterly fitness assessment',
      'Custom nutrition plan',
      'Recovery zone access',
      'Unlimited guest passes',
      'VIP member events',
    ],
  },
];

const MembershipPlans = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-white mb-8">Membership Plans</h2>
      <div className="space-y-8">
        {membershipPlans.map((plan, index) => (
          <Card
            key={index}
            className={`border-none overflow-hidden transform transition-transform hover:scale-105 ${
              index === 2 ? 'bg-gradient-to-br from-[#222] to-[#333]' : 'bg-[#222]'
            }`}
          >
            <div className="h-2 w-full" style={{ backgroundColor: plan.color }}></div>
            <CardHeader>
              <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
              <div className="flex items-end">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-white/70 ml-1">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <i className="fas fa-check text-[#00F0FF] mr-2 mt-1"></i>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full ${
                  index === 2 ? 'bg-[#FF3A3A] hover:bg-[#FF3A3A]/80' : 'bg-[#333] hover:bg-[#444]'
                } text-white !rounded-button whitespace-nowrap cursor-pointer`}
              >
                Choose Plan
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MembershipPlans;