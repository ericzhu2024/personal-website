import React from 'react';

const Education = () => {
  
  const edu = {
    school: "University of California, Berkeley", 
    degree: "Bachelor of Science in Electrical Engneering and Computer Science", 
    date: "Graduated in Dec 2025",
    location: "Berkeley, CA",
    courses: [
        "CS61A - The Structure and Interpretation of Computer Programs",
        "CS61B - Data Structures and Algorithms", 
        "CS61C - Computer Architecture", 
        "CS161 - Computer Security",
        "CS162 - Operating Systems and System Programming",
        "CS168 - Internet Architecture and Protocols",
        "CS170 - Efficient Algorithms and Intractable Problems",
        "CS186 - Database Systems",
        "EECS127 - Optimization Models in Engineering",
    ],
  };

  return (
    <section className="py-24" id="education">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          {/* <span className="text-blue-500 font-mono mr-4 text-2xl">02.</span>  */}
          Education
          <div className="h-px bg-zinc-800 ml-6 grow"></div>
        </h2>

        
        <div className="group relative p-8 rounded-3xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-all duration-300">
          

          <div className="absolute -inset-px bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

          <div className="relative">

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {edu.school}
              </h3>
              <span className="px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20">
                {edu.date}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 text-zinc-400 text-lg mb-8">
              <span className="font-medium text-zinc-200">{edu.degree}</span>
              <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
              <span>{edu.location}</span>
              {(
                <>
                  <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-zinc-700"></span>

                </>
              )}
            </div>

            <div className="mb-8">
              <h4 className="text-sm uppercase tracking-widest text-zinc-500 font-bold mb-4">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-3">
                {edu.courses.map((course, i) => (
                  <span key={i} className="px-3 py-1.5 bg-zinc-800/50 text-zinc-300 rounded-lg text-sm border border-zinc-700/50">
                    {course}
                  </span>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;