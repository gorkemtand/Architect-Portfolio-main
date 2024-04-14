import React from "react";
import Profile from "./Profile";
import Project from "./Project";
import ProjectsData from "../projects"; 
import Navbar from "./Navbar";



function App() {
  return (
    <div className="appContainer">
      <Navbar />
      <Profile />
      {ProjectsData.map((project) => (
        <Project key={project.id} project={project} />
      ))}
     
    </div>
  );
}

export default App;
