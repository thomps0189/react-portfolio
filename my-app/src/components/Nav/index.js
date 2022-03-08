import React from "react";
import "../../App.css";
import "../../index.css";

export default function Nav() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="/"
          className="title-font font-medium text-white mb-4 md:mb-0"
          alt="home">
          <a href="#about" className="ml-3 text-xl" alt="name">
            Angela Thompson
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
        </a>
      </div>
    </header>
  );
}
// import React, { useEffect } from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

// function Nav(props) {
//   const {
//     projects = [],
//     setCurrentProject,
//     currentProject,
//     contactSelected,
//     setContactSelected,
//   } = props;

//   useEffect(() => {
//     document.title = capitalizeFirstLetter(currentProject.name);
//   }, [currentProject]);

//   return (
//     <header className="flex-row px-1">
//       <h2>
//         <a data-testid="link" href="/">
//           {" "}
//           Angela Thompson
//         </a>
//       </h2>
//       <nav>
//         <ul className="flex-row">
//           <li className="mx-2">
//             <a href="#about" onClick={() => setContactSelected(false)}>
//               About me
//             </a>
//           </li>
//           <li className={`mx-2 ${contactSelected && "navActive"}`}>
//             <span onClick={() => setContactSelected(true)}>Contact</span>
//           </li>
//           {projects.map((project) => (
//             <li
//               className={`mx-1 ${
//                 currentProject.name === project.name &&
//                 !contactSelected &&
//                 "navActive"
//               }`}
//               key={project.name}>
//               <span
//                 onClick={() => {
//                   setCurrentProject(project);
//                   setContactSelected(false);
//                 }}>
//                 {capitalizeFirstLetter(project.name)}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Nav;
