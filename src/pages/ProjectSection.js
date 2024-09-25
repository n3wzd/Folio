import React, { useState } from 'react';
import ProjectItem from "../components/ProjectItem.js";
import ArrowButton from "../components/ArrowButton.js";
import ProjectPopup from "./ProjectPopup.js";
import "../styles/ProjectSection.css";

function makePageData(prev, cur) {
  return {cur: cur, prev: prev};
}

const ProjectSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [pageData, setPageData] = useState(makePageData(0, 0));
  const [animate, setAnimate] = useState(false);

  const projects = [{
      name: "test1",
      title: "프로젝트 1",
      description: "프로젝트 1에 대한 설명입니다.",
      text: "프로젝트 1에 대한 자세한 설명입니다.",
      link: "https://github.com/n3wzd/FlutPlayer",
    }, {
      name: "test2",
      title: "프로젝트 2",
      description: "프로젝트 2에 대한 설명입니다.",
      text: "프로젝트 2에 대한 자세한 설명입니다.",
      link: "https://github.com/n3wzd/Writer",
    }, {
      name: "test3",
      title: "프로젝트 3",
      description: "프로젝트 3에 대한 설명입니다.",
      text: "프로젝트 3에 대한 자세한 설명입니다.",
      link: "https://github.com/n3wzd/RPG-map-generator",
    }, {
      name: "test4",
      title: "프로젝트 4",
      description: "프로젝트 4에 대한 설명입니다.",
      text: "프로젝트 4에 대한 자세한 설명입니다.",
      link: "https://github.com/n3wzd/FlutPlayer",
    }, {
      name: "test5",
      title: "프로젝트 5",
      description: "프로젝트 5에 대한 설명입니다.",
      text: "프로젝트 5에 대한 자세한 설명입니다.",
      link: "https://github.com/n3wzd/FlutPlayer",
    }
  ];

  const handleButtonClick = (index) => {
    if(index !== pageData.cur && !animate) {
      setPageData(makePageData(pageData.cur, index));
      setAnimate(true);
      setTimeout(() => setAnimate(false), 700);
    }
  };

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <div  className="project-section">
        <h2 className="project-title">Project</h2>
          <div className="project-menu-container">
            <ArrowButton direction="left" onClick={() => handleButtonClick((pageData.cur - 1 + projects.length) % projects.length)} />
            <div className={`project-menu-section fade-out ${animate ? "animate" : ""}`}>
              <ProjectItem projectData={projects[pageData.prev]} onClick={openPopup} />
            </div>
            <div className={`project-menu-section fade-in ${animate ? "animate" : ""}`}>
              <ProjectItem projectData={projects[pageData.cur]} onClick={openPopup} />
            </div>
            <ArrowButton direction="right" onClick={() => handleButtonClick((pageData.cur + 1) % projects.length)} />
          </div>
        <div className="navigation-buttons">
          {projects.map((project, index) => (
            <button key={index} onClick={() => handleButtonClick(index)} className={index === pageData.cur ? "selected" : ""}/>
          ))}
        </div>
      </div>
      {isPopupOpen && (
        <ProjectPopup projectData={projects[pageData.cur]} closePopup={closePopup}/>
      )}
    </>
    
  );
}

export default ProjectSection;
