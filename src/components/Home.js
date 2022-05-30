import React from "react";
import { name, city } from "../data/data.js";

function Home() {

  return (
    <div id="home">
      <h1 >{name} is a Web Developer from {city}</h1>
      //test not accepting style="color:green" inline styling
    </div >

  )
}

export default Home;
