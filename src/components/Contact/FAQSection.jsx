import React, { useState } from "react";
import Card from "../common/Card";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What are the gym hours?",
      answer: "Monday–Friday: 6am–10pm, Saturday–Sunday: 8am–8pm.",
    },
    {
      question: "Do you offer personal training?",
      answer:
        "Yes, we offer personalized one-on-one and group training with certified trainers.",
    },
    {
      question: "Can I try before committing?",
      answer: "Absolutely! We offer a free trial day for new members.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Visa, Mastercard, Amex, and PayPal.",
    },
  ];

  return (
    <section className="py-20 bg-[#111]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Find answers to common questions about EliteX Fitness.
          </p>
        </div>
        <Card className="p-6">
          <Card.Content>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-700">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full flex justify-between items-center p-4 text-left"
                  >
                    <span className="text-white font-medium">
                      {faq.question}
                    </span>
                    <i
                      className={`fas ${
                        openFAQ === index ? "fa-chevron-up" : "fa-chevron-down"
                      }`}
                      aria-hidden="true"
                    ></i>
                  </button>
                  {openFAQ === index && (
                    <p className="text-white/70 p-4">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </Card.Content>
        </Card>
      </div>
    </section>
  );
};

export default FAQSection;
