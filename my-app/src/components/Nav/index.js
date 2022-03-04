import React from "react";

function Nav() {
  const projects = [
    {
      name: "nps-project",
      description: "nps project descriptions and what it does",
    },
    {
      name: "password-generator",
      description: "this is a program that will generate your password",
    },
  ];
  function projectSelected() {
    console.log("hello");
  }
  return (
    <header>
      <h2>
        <a href="/"> Angela Thompson, Full-Stack Web Developer</a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {projects.map((project) => (
            <li className="mx-1" key={project.name}>
              <span onClick={projectSelected}>{project.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
