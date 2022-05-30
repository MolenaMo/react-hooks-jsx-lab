import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Sometimes I get it right off the bat, other times i struggle.</p>
      <img src={image} alt="I made this" />
    </div>
  )
}

export default About;
