import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Kinovat",
      role: "Software Engineer Intern",
      period: "Sep 2024 - Dec 2024",
      description: "Implemented a Node.js/Stripe marketplace API, a serverless AWS Lambda image pipeline, and a Redis-based geographic search that cut query latency by 70%.",
      skills: ["Javascript/Node.js", "Express.js", "Redis", "AWS"]
    },
    {
      company: "City College of San Francisco",
      role: "Teaching Assisant",
      period: "Aug 2023 - Dec 2023",
      description: "Mentored 50+ students in Python and Java as a Teaching Assistant, providing technical guidance on data structures, algorithms, and debugging to enhance their software engineering foundations.",
      skills: ["Java", "Python"]
    },
    {
      company: "Opportunities for All",
      role: "Software Engineer Intern",
      period: "Jun 2022 - Aug 2022",
      description: "Developed a full-stack ocean conservation platform using Django and React, architecting PostgreSQL schemas and authentication systems to deliver interactive educational content.",
      skills: ["Python", "React", "Django"]
    }
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold inline-block relative">
            {/* <span className="text-blue-500 font-mono mr-4">03.</span> */}
             Experiences
            <div className="h-1 bg-blue-500 mt-2 w-1/2 mx-auto"></div>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">

          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800 -translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal group">
                

                <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-black border-2 border-blue-500 rounded-full -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:scale-125 transition-transform duration-300"></div>


                <div className={`
                  ml-12 md:ml-0 w-[calc(100%-3rem)] md:w-[45%] 
                  p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 
                  hover:border-blue-500/50 transition-all duration-300
                  ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}
                `}>
                  <div className="flex flex-col mb-2">
                    <time className="text-blue-500 font-mono text-sm mb-1">{exp.period}</time>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-blue-400 font-medium">@ {exp.company}</p>
                  </div>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((s, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded border border-zinc-700 font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-px bg-zinc-800 
                  ${index % 2 === 0 ? 'left-[45%]' : 'right-[45%]'}`}>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;