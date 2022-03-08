import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md: flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, I'm Angela
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
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
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object center rounded"
            alt="hero"
            src="/my-app/src/assets/cover/background-image.jpeg"
          />
        </div>
      </div>
    </section>
  );
}

// import React from "react";
// import coverImage from "../../assets/cover/background-image.jpeg";

// function About() {
//   return (
//     <section className="my-5">
//       <h1 id="about">Who am I?</h1>
//       <img
//         src={coverImage}
//         className="my-2 cover-image"
//         style={{ width: "100%" }}
//         alt="cover"
//       />
//       <div className="my-2">
//         <p>Lorem ipsum dolor blah blah blah</p>
//       </div>
//     </section>
//   );
// }

// export default About;
