import React from 'react'
import photo2 from '../assets/photo2.JPG'
import photo3 from '../assets/photo3.JPG'
import photo4 from '../assets/photo4.JPG'



const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-12">

      <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm mb-8 animate-fade-in">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        <span>Based in San Francisco</span>
      </div>

      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Hello, I'm <span className="text-blue-500">Eric</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-10">
          Software Engineer <span className="mx-2 text-zinc-700">|</span> 
          Building scalable systems and elegant digital experiences.
        </p>
      </div>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
        <a 
            href="#projects" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-blue-500/20 inline-block"
        >
            View My Work
        </a>

        <a 
            href="#footer" 
            className="border border-zinc-700 hover:bg-zinc-800 text-white px-8 py-3 rounded-full font-bold transition-all inline-block"
        >
            Contact Me
        </a>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-150 md:h-187.5 w-full max-w-4xl mx-auto px-4">
            <img src={photo2} className="w-full h-full object-cover rounded-3xl col-span-1 row-span-2 border border-zinc-800 shadow-2xl transition-transform hover:scale-[1.02] duration-500" alt="Main" />
            <img src={photo3} className="w-full h-full object-cover rounded-3xl border border-zinc-800 shadow-2xl transition-transform hover:scale-[1.02] duration-500" alt="Small 1" />
            <img src={photo4} className="w-full h-full object-cover rounded-3xl border border-zinc-800 shadow-2xl transition-transform hover:scale-[1.02] duration-500" alt="Small 2" />
        </div>
    </section>
  );
};

export default Hero;