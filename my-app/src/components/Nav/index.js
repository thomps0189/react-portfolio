import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { projects = [], setCurrentProject, currentProject } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          {" "}
          Angela Thompson
        </a>
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
            <li
              className={`mx-1 ${
                currentProject.name === project.name && "navActive"
              }`}>
              <span
                onClick={() => {
                  setCurrentProject(project);
                }}>
                {capitalizeFirstLetter(project.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
