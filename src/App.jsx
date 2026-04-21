import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import About from "./components/About";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  const [selectedSkill, setSelectedSkill] = useState("");

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills setSelectedSkill={setSelectedSkill} />
      <Projects selectedSkill={selectedSkill} />
      <Contact/>
    </div>
  );
}

export default App;