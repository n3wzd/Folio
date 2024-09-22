import React, { useState } from 'react';
import "../styles/ProjectSection.css";

function makeItem(name, title, description) {
  return {name: name, title: title, description: description};
}

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    makeItem(
      "test1",
      "프로젝트 1",
      "프로젝트 1에 대한 설명입니다."
    ),
    makeItem(
      "test2",
      "프로젝트 2",
      "프로젝트 2에 대한 설명입니다."
    ),
    makeItem(
      "test3",
      "프로젝트 3",
      "프로젝트 3에 대한 설명입니다."
    ),
    makeItem(
      "test4",
      "프로젝트 4",
      "프로젝트 4에 대한 설명입니다."
    ),
    makeItem(
      "test5",
      "프로젝트 5",
      "프로젝트 5에 대한 설명입니다."
    ),
  ];

  const handleButtonClick = (index) => {
    setSelectedProject(index);
  };

  return (
    <div  className="project-section">
      <h1 className="project-title">Project</h1>
      <div className="project-menu-section">
        <div className="project-menu-left">
          <img src={`/${projects[selectedProject].name}.jpg`} alt="Project Thumbnail" />
        </div>
        <div className="project-menu-right">
          <div className="project-name">
            <h2>{projects[selectedProject].title}</h2>
          </div>
          <div className="project-image-grid">
            <img src={`/${projects[selectedProject].name}.jpg`} alt="Project Test 1" />
            <img src={`/${projects[selectedProject].name}.jpg`} alt="Project Test 2" />
            <img src={`/${projects[selectedProject].name}.jpg`} alt="Project Test 3" />
            <img src={`/${projects[selectedProject].name}.jpg`} alt="Project Test 4" />
          </div>
          <div className="project-description">
            <p>{projects[selectedProject].description}</p>
          </div>
        </div>
      </div>
      <div className="navigation-buttons">
        {projects.map((project, index) => (
          <button key={index} onClick={() => handleButtonClick(index)}/>
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
