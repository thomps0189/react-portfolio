import React from "react";
import coverImage from "../../assets/cover/background-image.jpeg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img
        src={coverImage}
        className="my-2 cover-image"
        style={{ width: "100%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>Lorem ipsum dolor blah blah blah</p>
      </div>
    </section>
  );
}

export default About;
