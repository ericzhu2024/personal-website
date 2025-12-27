import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-zinc-900" id='footer'>
      <div className="container mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let's <span className="text-blue-500">Connect</span>
        </h2>
        <p className="text-zinc-500 max-w-md mx-auto mb-10">
          I'm currently looking for new opportunities in the Bay Area. 
          Whether you have a question or just want to say hi, my inbox is always open!
        </p>

        <div className="flex justify-center items-center gap-8 mb-12">
          <a href="https://github.com/ericzhu2024" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
            <span className="font-mono text-sm uppercase tracking-widest">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/ericz888/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
            <span className="font-mono text-sm uppercase tracking-widest">LinkedIn</span>
          </a>
          <a href="mailto: ericzhu629@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
            <span className="font-mono text-sm uppercase tracking-widest">Email</span>
          </a>
          {/* resume pdf */}
          <a href="/resume.pdf" target="_blank" className="text-blue-500 hover:text-blue-400 transition-colors">
            <span className="font-mono text-sm uppercase tracking-widest font-bold">Resume</span>
          </a>
        </div>

        {/* cut line */}
        <div className="w-12 h-px bg-zinc-800 mx-auto mb-12"></div>

        {/* copyright */}
        <div className="space-y-2">
          <p className="text-zinc-600 text-xs font-mono uppercase tracking-tighter">
            Designed & Built by Eric © {currentYear}
          </p>
          <p className="text-[10px] text-zinc-800 uppercase tracking-[0.2em]">
            San Francisco, California
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;