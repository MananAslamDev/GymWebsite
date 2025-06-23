import React from 'react';

const VideoSection = () => {
  return (
    <section className="py-20 bg-[#111]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience EliteX</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Take a virtual tour of our state-of-the-art facilities.
          </p>
        </div>
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="EliteX Fitness Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;