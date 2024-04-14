import React from "react";

function ProjectCover({ title, id, link,coverUrl }) {
  const coverStyle = {
    backgroundImage: `url(${coverUrl})`,
  };
  return (
    <div className="projectCoverContainer" style={coverStyle}>
   
        <div className="coverTitleContainer">
          <h1>{title}</h1>
          <a href={link} target="_blank" rel="noopener noreferrer">See Project &raquo;</a>
        </div>
          <h2 className="coverCounter">0{id}/<span>03</span></h2>
     
    </div>
  );
}

export default ProjectCover;
