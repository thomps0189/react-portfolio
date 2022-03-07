import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/projects/team-profile-generator.png";

function Projects() {
  const currentProject = {
    name: "nps-project",
    description: "nps project description",
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentProject.name)}</h1>
      <p>{currentProject.description}</p>
      <div className="flex-row">
        <img src={photo} alt="project example" className="img-thumbnail mx-1" />
      </div>
    </section>
  );
}
export default Projects;
