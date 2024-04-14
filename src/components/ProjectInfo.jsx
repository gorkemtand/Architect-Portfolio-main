import React from "react";

function ProjectInfo({ image1, description1, image2, description2, image3, description3 }) {
  const createMarkup = (text) => {
    return { __html: text.replace(/\n/g, "<br>") };
  };

  return (
    <div className="projectInfoContainer">
      <div id="detail1" className="detail">
        <img className="infoImg" src={image1} alt="Image 1" />
        <p dangerouslySetInnerHTML={createMarkup(description1)}></p>
      </div>
      <div id="detail2" className="detail">
        <p dangerouslySetInnerHTML={createMarkup(description2)}></p>
        <img className="infoImg" src={image2} alt="Image 2" />
      </div>
      <div id="detail3" className="detail">
        <img className="infoImg" src={image3} alt="Image 3" />
        <p dangerouslySetInnerHTML={createMarkup(description3)}></p>
      </div>
    </div>
  );
}

export default ProjectInfo;
