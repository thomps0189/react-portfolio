import React, { useState } from "react";
import resume from "../../assets/resume/Full-Stack Web Development Resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }

  return (
    <section id="resume">
      <div className="res container px-5 py-10 mx-auto">
        <h2 className="heading sm:text-4xl text-3xl font-medium title-font text-white mb-4 text-center">
          Resume
        </h2>
        <div className="d-flex flex-col justify-content-center align-items-center">
          <iframe
            title="ATResume"
            src={resume}
            width="100%"
            height="550"
            alt="AT Resume"></iframe>
        </div>
      </div>
    </section>
  );
}

export default Resume;
