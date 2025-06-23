import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../common/Card';
import { Button } from '../common/Button';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProgramSlider = ({ programs }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="program-slider"
    >
      {programs.map((program, index) => (
        <SwiperSlide key={index}>
          <Card className="bg-[#222] border-none h-[500px] transform transition-transform hover:scale-105 hover:shadow-xl">
            <div className="h-64 overflow-hidden">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover object-top transition-transform hover:scale-110"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-white">{program.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white/70 text-base">{program.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button className="bg-[#FF3A3A] hover:bg-[#FF3A3A]/80 text-white !rounded-button whitespace-nowrap cursor-pointer">
                Learn More
              </Button>
            </CardFooter>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProgramSlider;