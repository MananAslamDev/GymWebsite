import React from 'react';
import Swiper from '../common/Swiper';
import Card from '../common/Card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Wilson',
      quote: 'EliteX transformed my life! The trainers are incredible and the programs are top-notch.',
      image: 'https://readdy.ai/api/search-image?query=Happy%20female%20client%2C%20smiling%2C%20modern%20gym%2C%20high-quality%20photography&width=100&height=100&seq=testimonial1',
    },
    {
      id: 2,
      name: 'James Lee',
      quote: 'The best gym I’ve ever joined. The community and support here are unmatched.',
      image: 'https://readdy.ai/api/search-image?query=Happy%20male%20client%2C%20smiling%2C%20modern%20gym%2C%20high-quality%20photography&width=100&height=100&seq=testimonial2',
    },
    {
      id: 3,
      name: 'Lisa Davis',
      quote: 'I’ve never felt stronger or more confident. Thank you, EliteX!',
      image: 'https://readdy.ai/api/search-image?query=Happy%20female%20client%2C%20smiling%2C%20modern%20gym%2C%20high-quality%20photography&width=100&height=100&seq=testimonial3',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Members Say
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Hear from our community about their transformative experiences at EliteX Fitness.
          </p>
        </div>
        <Swiper
          className="testimonial-slider"
          options={{
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: { clickable: true },
            breakpoints: {
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="swiper-slide">
              <Card className="p-6">
                <Card.Content>
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <Card.Title>{testimonial.name}</Card.Title>
                    </div>
                  </div>
                  <Card.Description>{`"${testimonial.quote}"`}</Card.Description>
                </Card.Content>
              </Card>
            </div>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;