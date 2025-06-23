import React from "react";
import Swiper from "../common/Swiper";
import Card from "../common/Card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Wilson",
      quote: "John’s training sessions are intense but so rewarding!",
      image:
        "https://readdy.ai/api/search-image?query=Happy%20female%20client%2C%20smiling%2C%20modern%20gym%2C%20high-quality%20photography&width=100&height=100&seq=trainer_testimonial1",
    },
    {
      id: 2,
      name: "James Lee",
      quote: "Emma’s yoga classes have improved my flexibility tremendously.",
      image:
        "https://readdy.ai/api/search-image?query=Happy%20male%20client%2C%20smiling%2C%20modern%20gym%2C%20high-quality%20photography&width=100&height=100&seq=trainer_testimonial2",
    },
    {
      id: 3,
      name: "Lisa Brown",
      quote: "Mike’s energy in HIIT classes keeps me coming back!",
      image:
        "https://readdy.ai/api/search-image?query=Happy%20female%20client%2C%20smiling%2C%20modern%20gym%2C%20high-quality%20photography&width=100&height=100&seq=trainer_testimonial3",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h2>
        <Swiper ariaLabel="Testimonials">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="swiper-slide px-4">
              <Card className="p-6 shadow-md bg-white rounded-xl">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">"{testimonial.quote}"</p>
              </Card>
            </div>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
