import React from 'react';
import Pintos from "../assets/cs162bean.png"
import EvanBot from "../assets/evanbot.png"
import RookieDB from "../assets/cs186.jpeg"
import MapReduce from "../assets/mapreduce.webp"
const Projects = () => {
  const projects = [
    {
      title: "MapReduce",
      description:"Implemented a fault-tolerant distributed MapReduce system in Rust using asynchronous programming with Tokio. Built RPC-based coordinator-worker communication using gRPC for task scheduling, heartbeat monitoring, and automatic task reassignment on worker failures. Engineered resilient job execution with crash recovery and dynamic load balancing across distributed nodes",
      tech: ["Rust", "Tokio", "Distributed System", "gRPC", "Fault Tolerance"],
      link: "https://cs162.org/static/hw/hw-map-reduce-rs/",
      image: MapReduce
    },
    {
      title: "pintOS",
      description:"Designed and implemented core operating system kernels in C, including process syscalls, user-level threads management and its synchronization primitives. Optimized file system performance by designing a 64-entry buffer cache, and engineered a custom Perl-based testing suite to verify cache hit rates and disk I/O reduction",
      tech: ["C", "perl", "Operating System", "Cache", "GDB"],
      link: "https://cs162.org/static/proj/pintos-docs/",
      image: Pintos
    },
    {
      title: "Secure File System",
      description: "Architected and implemented a secure, end-to-end encrypted file storage system in Go, designed to operate on untrusted servers. Leveraged cryptography to protect against tampering and unauthorized access",
      tech: ["Go", "Cryptography", "Access Control", "Data Integrity", "Unit Testing"],
      link: "https://fa25.cs161.org/proj2/",
      image: EvanBot
    },
    {
      title: "RookieDB",
      description: "Built a fully-functional relational database management system from scratch in Java, implementing B+ tree indices and multiple join algorithms (hash, sort-merge, nested loop). Developed cost-based query optimization with selectivity estimation and achieved ACID compliance through multigranularity locking and ARIES recovery protocol",
      tech: ["Java", "JUnit", "B+ Trees", "Query Optimization", "ARIES Recovery", "Cocurrency Control"],
      link: "https://cs186.gitbook.io/project/",
      image: RookieDB
    }

  ];

  return (
    <section className="py-24" id="projects">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-16 flex items-center">
          {/* <span className="text-blue-500 font-mono mr-4 text-2xl">04.</span>  */}
          Featured Projects
          <div className="h-px bg-zinc-800 ml-6 grow"></div>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-3xl border border-zinc-800 bg-zinc-900/20 overflow-hidden hover:border-blue-500/50 transition-all duration-500">
              
              {/* Project Image - 保持高比例 */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
              </div>

              {/* Project Details */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-800/50 text-blue-400 text-xs font-mono rounded-full border border-zinc-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub for more*/}
        <div className="mt-16 text-center">
          <a href="https://github.com/ericzhu2024" className="inline-flex items-center space-x-2 text-zinc-500 hover:text-blue-400 transition-colors font-mono">
            <span>View more on GitHub</span>
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;