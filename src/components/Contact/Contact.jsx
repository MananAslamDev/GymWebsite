import React from 'react';
import HeroSection from './HeroSection';
import ContactMembershipSection from './ContactMembershipSection';
import FAQSection from './FAQSection';
// import CallToActionSection from './CallToActionSection';

const Contact = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ContactMembershipSection />
      <FAQSection />
      <CallToActionSection />
    </div>
  );
};

export default Contact;