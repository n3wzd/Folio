import React from "react";
import "../styles/ProjectSection.css";

const ProjectItem = ({projectData, onClick}) => {
  return (
    <>
        <div className="project-menu-left" onClick={onClick}>
          <video src={projectData.video} autoPlay={true} muted={true} loop={true}/> 
        </div>
        <div className="project-menu-right">
          <div className="project-name">
            <h3>{projectData.title}</h3>
          </div>
          <div className="project-image-grid">
            <img src={projectData.imgList[0]} alt="Project Test 1" />
            <img src={projectData.imgList[1]} alt="Project Test 2" />
            <img src={projectData.imgList[2]} alt="Project Test 3" />
            <img src={projectData.imgList[3]} alt="Project Test 4" />
          </div>
          <div className="project-description">
            <p>{projectData.description}</p>
          </div>
        </div>
    </>
  );
};

export default ProjectItem;
