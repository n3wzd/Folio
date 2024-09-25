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
      title: "FlutPlayer",
      description: "음원 재생 안드로이드 & 윈도우 애플리케이션",
      text: "이 앱은 오디오 재생과 관련된 다양한 기능을 제공합니다. 사용자는 슬라이더를 통해 재생 및 일시 정지, 트랙 이동, 볼륨 조절, 그리고 반복 및 셔플 모드를 설정할 수 있습니다. 태그 관리, 배경 설정, 이퀄라이저 조절 등 커스터마이징이 가능하며, 데이터베이스와 CSV 파일을 통한 설정 저장 및 불러오기를 지원합니다.",
      link: "https://github.com/n3wzd/FlutPlayer",
      video: "FlutPlayer-1.mp4",
      imgList: ["FlutPlayer-2.png", "FlutPlayer-3.png", "FlutPlayer-4.png", "FlutPlayer-5.png"],
    }, {
      title: "Writer",
      description: "Markdown 텍스트 실시간 편집기 웹 애플리케이션",
      text: "Markdown 텍스트를 작성하고 실시간으로 편집할 수 있으며, 여러 텍스트 파일을 생성하고 저장할 수 있습니다. 또한, 파일의 이름을 변경하거나 삭제할 수 있는 기능도 제공합니다. 작성한 파일은 MD 또는 HTML 형식으로 저장할 수 있으며, 기존의 MD 및 TEXT 파일을 불러오는 것도 가능합니다.",
      link: "https://github.com/n3wzd/Writer",
      video: "Writer-1.mp4",
      imgList: ["Writer-2.png", "Writer-3.png", "Writer-4.png", "Writer-5.png"],
    }, {
      title: "프로젝트 3",
      description: "프로젝트 3에 대한 설명입니다.",
      text: "프로젝트 3에 대한 자세한 설명입니다.",
      link: "https://github.com/n3wzd/RPG-map-generator",
      video: "FlutPlayer-1.mp4",
      imgList: ["FlutPlayer-2.png", "FlutPlayer-3.png", "FlutPlayer-4.png", "FlutPlayer-5.png"],
    }, {
      title: "프로젝트 4",
      description: "프로젝트 4에 대한 설명입니다.",
      text: "프로젝트 4에 대한 자세한 설명입니다.",
      link: "https://github.com/n3wzd/FlutPlayer",
      video: "FlutPlayer-1.mp4",
      imgList: ["FlutPlayer-2.png", "FlutPlayer-3.png", "FlutPlayer-4.png", "FlutPlayer-5.png"],
    }, {
      title: "프로젝트 5",
      description: "프로젝트 5에 대한 설명입니다.",
      text: "프로젝트 5에 대한 자세한 설명입니다.",
      link: "https://github.com/n3wzd/FlutPlayer",
      video: "FlutPlayer-1.mp4",
      imgList: ["FlutPlayer-2.png", "FlutPlayer-3.png", "FlutPlayer-4.png", "FlutPlayer-5.png"],
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
