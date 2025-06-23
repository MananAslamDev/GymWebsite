import React from "react";
import HeroSection from "../components/ui/HeroSection";
import MembershipPlans from "../components/ui/MembershipPlans";
import FAQ from "../components/ui/FAQ";
import Input from "../components/common/Input"; // Default import
import Textarea from "../components/common/Textarea"; // Default import
import Button from "../components/common/Button"; // Default import

const Contact = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection
        title="Join the"
        highlightedText="Elite"
        description="Contact us today to start your fitness journey or explore our membership options."
        image="https://readdy.ai/api/search-image?query=Modern%20gym%20reception%20area%20with%20sleek%20design%2C%20dark%20atmosphere%20with%20dramatic%20lighting%2C%20reception%20desk%20with%20red%20accent%20lighting%2C%20high-quality%20professional%20photography%2C%20empty%20reception%20ready%20for%20clients&width=1920&height=800&seq=contact1&orientation=landscape"
        imageAlt="Gym reception"
      />

      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
              <div className="bg-[#222] border-none rounded-lg p-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-white">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        placeholder="Your first name"
                        className="bg-[#333] border-none text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-white">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Your last name"
                        className="bg-[#333] border-none text-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-white">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      className="bg-[#333] border-none text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-white">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      placeholder="Your phone number"
                      className="bg-[#333] border-none text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-white">
                      I'm interested in
                    </label>
                    <div className="relative">
                      <select
                        id="interest"
                        className="w-full bg-[#333] text-white p-3 rounded-md appearance-none"
                      >
                        <option value="">Select an option</option>
                        <option value="membership">Membership Information</option>
                        <option value="personalTraining">Personal Training</option>
                        <option value="groupClasses">Group Classes</option>
                        <option value="corporateMembership">Corporate Membership</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <i className="fas fa-chevron-down text-white"></i>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-white">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your fitness goals"
                      className="bg-[#333] border-none text-white min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-[#FF3A3A] hover:bg-[#FF3A3A]/80 text-white py-6 !rounded-button whitespace-nowrap cursor-pointer">
                    Send Message
                  </Button>
                </div>
              </div>
              <ContactInfo />
            </div>
            <div>
              <MembershipPlans />
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Find Us</h3>
                <div className="h-[300px] bg-[#222] rounded-lg relative overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=Detailed%20city%20map%20showing%20location%20of%20a%20gym%2C%20street%20layout%20with%20highlighted%20gym%20location%2C%20modern%20map%20design%20with%20dark%20theme%2C%20digital%20map%20visualization&width=800&height=400&seq=map1&orientation=landscape"
                    alt="Location map"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#FF3A3A] text-white p-3 rounded-lg shadow-lg">
                    <h4 className="font-bold">EliteX Fitness</h4>
                    <p className="text-sm">123 Fitness Avenue, Seattle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <section className="py-20 bg-[#1A1A1A] relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://readdy.ai/api/search-image?query=Abstract%20fitness%20pattern%20with%20dumbbells%2C%20kettlebells%20and%20fitness%20equipment%20silhouettes%2C%20dark%20background%20with%20red%20and%20blue%20accent%20lighting%2C%20modern%20design%20pattern%2C%20seamless%20texture&width=1920&height=600&seq=pattern1&orientation=landscape"
            alt="Fitness pattern"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join EliteX Fitness today and take the first step towards becoming the best version of yourself. Our team is ready to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#FF3A3A] hover:bg-[#FF3A3A]/80 text-white px-8 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer">
                Join Now
              </Button>
              <Button className="bg-transparent border border-white hover:bg-white/10 text-white px-8 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer">
                Book a Tour
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;