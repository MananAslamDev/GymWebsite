import React from 'react';
import HeroSection from './HeroSection';
import OurStorySection from './OurStorySection';
import TimelineSection from './TimelineSection';
import CoreValuesSection from './CoreValuesSection';
import VideoSection from './VideoSection';

const About = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <OurStorySection />
      <TimelineSection />
      <CoreValuesSection />
      <VideoSection />
    </div>
  );
};

export default About;