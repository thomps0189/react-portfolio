import React from "react";
import { projects } from "../../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="flex flex-col w-full mb-20">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 text-center">
          Apps I've Built
        </h1>
      </div>
      <div className="flex flex-wrap -m-4">
        {projects.map((project) => (
          <a
            href={project.link}
            key={project.image}
            className="sm:w-1/2 w-100 p-4"
            target="_blank"
            rel="noopener noreferrer">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={project.image}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-90 hover:no-underline">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1 hover:no-underline">
                  {project.subtitle}
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3 no-underline">
                  {project.title}
                </h1>
                <p className="leading-relaxed no-underline">
                  {project.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
