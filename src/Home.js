import React from "react";
import squirrel from "./resources/wombat.jpg"

/* 
  feel free to add/remove any HTML you would like. Just remember that all content
  must be returned nested inside a single element (in this case, the .app-content div)
*/

const Home = () => {
  return (
    <div className="app-content">
      <h1>Hakuna Matata</h1>
      <h2>We're glad you're here</h2>
      <img src={squirrel} alt="a fat wombat"></img>
    </div>
  );
};

export default Home;


