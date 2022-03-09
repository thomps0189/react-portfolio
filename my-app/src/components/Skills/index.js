import React from "react";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            {" "}
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 w-full justify-center">
          <div className="p-2 sm:w-1/2 w-full">
            {/* add below bg-gray-800 to add box below content */}
            <div className="  rounded flex flex-auto p-6 h-full m-auto w-auto items-center text-align-center justify-center">
              <span className="title-font font-medium text-white mr-8">
                HTML <br /> CSS <br /> Javascript <br /> MERN
              </span>{" "}
              <br />
              <span className="title-font font-medium text-white mr-8 p-2">
                SQL <br /> NoSQL <br /> jQuery <br /> Bootstrap/Tailwind
              </span>
              <span className="title-font font-medium text-white mr-8">
                Node.js <br /> Express <br /> AJAX <br /> Sequelize <br />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
