import React from "react";
import coverPhoto from "../../assets/cover/ANGELA-LI-cool-tone-3.jpg";

export default function About() {
  return (
    <section id="about">
      {/* add flex-col below if it looks weird */}
      <div className="container mx-auto flex px-10 py-20 md: flex-row  items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-start text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, I'm Angela
            <br className="hidden lg:inline-block" />
            I'm a Front-End Web Developer
          </h1>
          <p className="mb-8 leading-relaxed">
            I was born and raised in Nashville, TN. I graduated from Miami
            University of Ohio in 2015 and entered into the wealth management
            industry. After several years I decided to go back to school and
            become a Web Developer. I am a recent graduate of Vanderbilt
            University's Full-Stack Web Development Bootcamp. In my free time I
            enjoy reading, hiking, and playing piano.
          </p>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object center rounded mb-8"
              alt="hero"
              src={coverPhoto}
            />
          </div>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work with Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See my Past Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
