import React from 'react';

const Hero = () => {
  return (
    <section className="hero bg-primary text-white text-center flex items-center justify-center pt-60 pb-40 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center z-10 max-w-screen-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Custom Websites, Infinite Possibilities
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Empower your business with a website as unique as you are. Whether it’s advanced functionality or endless customization, we bring your ideas to life with precision and creativity.
        </p>
      </div>
    </section>
  );
};

export default Hero;
