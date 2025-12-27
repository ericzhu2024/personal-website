import { useState } from 'react'
import Heading from "./components/Heading.jsx"
import Hero from "./components/Hero.jsx"
import Education from "./components/Education.jsx"
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <div>
      <Hero />
      <Education  />
      <Experience />
      <Projects />
      {/* <Skills /> */}
      <Footer />
    </div>
  )
}

export default App
