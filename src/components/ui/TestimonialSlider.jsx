import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Card } from '../common/Card';
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialSlider = ({ testimonials }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className="testimonial-slider"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <Card className="bg-[#222] border-none overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s transformation`}
                  className="w-full h-[300px] md:h-full object-cover object-top"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="mb-4">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <i key={i} className="fas fa-star text-[#FF3A3A] mr-1"></i>
                  ))}
                </div>
                <p className="text-xl text-white italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                  <p className="text-[#00F0FF]">{testimonial.achievement}</p>
                </div>
              </div>
            </div>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;