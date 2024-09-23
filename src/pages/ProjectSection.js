import React, { useState } from 'react';
import ProjectItem from "../components/ProjectItem.js";
import ArrowButton from "../components/ArrowButton.js";
import "../styles/ProjectSection.css";

function makeItem(name, title, description) {
  return {name: name, title: title, description: description};
}

function makePageData(prev, cur) {
  return {cur: cur, prev: prev};
}

const ProjectSection = () => {
  const [pageData, setPageData] = useState(makePageData(0, 0));
  const [animate, setAnimate] = useState(false);

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
    if(index !== pageData.cur) {
      setPageData(makePageData(pageData.cur, index));
      setAnimate(false);
      setTimeout(() => setAnimate(true), 0);
    }
  };

  return (
    <div  className="project-section">
      <h1 className="project-title">Project</h1>
        <div className="project-menu-container">
          <ArrowButton direction="left" onClick={() => {}} />
          <div className={`project-menu-section fade-out ${animate ? "animate" : ""}`}>
            <ProjectItem projectData={projects[pageData.prev]} />
          </div>
          <div className={`project-menu-section fade-in ${animate ? "animate" : ""}`}>
            <ProjectItem projectData={projects[pageData.cur]} />
          </div>
          <ArrowButton direction="right" onClick={() => {}} />
        </div>
      <div className="navigation-buttons">
        {projects.map((project, index) => (
          <button key={index} onClick={() => handleButtonClick(index)} className={index === pageData.cur ? "selected" : ""}/>
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
