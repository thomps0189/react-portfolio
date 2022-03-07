import "./App.css";
import "./index.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import { useState } from "react";

function App() {
  const [projects] = useState([
    {
      name: "nps",
      description: "nps project description",
    },
  ]);
  const [currentProject, setCurrentProject] = useState(projects[0]);
  return (
    <div>
      <Nav
        projects={projects}
        setCurrentProject={setCurrentProject}
        currentProject={currentProject}></Nav>
      <main>
        <About></About>
        <Projects></Projects>
      </main>
    </div>
  );
}

export default App;
