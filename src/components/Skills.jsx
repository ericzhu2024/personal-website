import React from "react";
const TechStack = () => {
  const skills = {
    "Languages": ["Java", "Python", "Go", "JavaScript (ES6+)", "SQL"],
    "Backend": ["Spring Boot", "Node.js", "Django", "PostgreSQL", "Redis"],
    "Infrastructure": ["AWS (S3, Lambda)", "Docker", "Kubernetes", "CI/CD"]
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category}>
              <h3 className="text-blue-500 font-mono mb-6 uppercase tracking-widest text-sm">{category}</h3>
              <ul className="space-y-3">
                {list.map(item => (
                  <li key={item} className="text-zinc-300 flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 mr-3 group-hover:bg-blue-500 transition-colors"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack