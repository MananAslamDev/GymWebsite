import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../common/Card';

const faqs = [
  {
    question: 'What are the gym’s operating hours?',
    answer: 'We’re open Monday to Friday from 6am to 10pm, and Saturday to Sunday from 8am to 8pm.',
  },
  {
    question: 'Do you offer personal training?',
    answer: 'Yes, we offer personalized training sessions with our certified trainers. You can book sessions individually or as part of our Premium and Elite membership plans.',
  },
  {
    question: 'Can I try the gym before committing?',
    answer: 'Absolutely! We offer a free trial session. Contact us to schedule your visit.',
  },
  {
    question: 'Are group classes included in all memberships?',
    answer: 'Group classes are included in all membership plans, with unlimited access for Premium and Elite members.',
  },
  {
    question: 'What equipment is available at EliteX Fitness?',
    answer: 'Our gym features state-of-the-art equipment, including cardio machines, weightlifting racks, functional training areas, and dedicated spaces for yoga and recovery.',
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-[#222]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Find answers to common questions about EliteX Fitness.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-[#1A1A1A] border-none">
              <CardHeader>
                <CardTitle className="text-xl text-white">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;