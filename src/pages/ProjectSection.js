import React, { useState } from 'react';
import ProjectItem from "../components/menu/ProjectItem.js";
import ArrowButton from "../components/common/ArrowButton.js";
import ProjectPopup from "./ProjectPopup.js";
import "../styles/ProjectSection.css";

const ProjectSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [pageData, setPageData] = useState({cur: 0, prev: 0});
  const [projectMenuClassSwap, setProjectMenuClassSwap] = useState(false);
  const [animate, setAnimate] = useState(false);

  const publicPath = process.env.PUBLIC_URL;
  const createImgListPath = (name) => Array.from({ length: 4 }, (_, i) => `${publicPath}/${name}-${i + 2}.png`)

  const projects = [{
      title: "LocaQuest",
      description: "Gamification 실시간 위치 서비스",
      text: "LocaQuest는 Redis와 Kafka를 활용한 실시간 데이터 분석을 통해 사용자에게 경험치, 레벨, 도전 과제 등 게임화된 요소를 제공하고, 마이크로서비스 아키텍처로 높은 성능을 구현하는 위치 기반 게임화 플랫폼입니다.",
      link: "https://github.com/n3wzd/LocaQuest-Frontend",
      video: `${publicPath}/LocaQuest-1.mp4`,
      imgList: createImgListPath("LocaQuest"),
      readme: `${publicPath}/text/readme-locaquest.md`,
    }, {
      title: "FlutPlayer",
      description: "음원 재생 안드로이드 & 윈도우 애플리케이션",
      text: "FlutPlayer는 Android, Windows 크로스플랫폼 오디오 플레이어 애플리케이션입니다. 태그 관리, 이퀄라이저, 비주얼라이저, 매시업 모드, 커스텀 백그라운드 등 다양한 기능으로 사용자가 원하는대로 커스터마이즈할 수 있습니다.",
      link: "https://github.com/n3wzd/FlutPlayer",
      video: `${publicPath}/FlutPlayer-1.mp4`,
      imgList: createImgListPath("FlutPlayer"),
      readme: `${publicPath}/text/readme-flutplayer.md`,
    }, {
      title: "Writer",
      description: "Markdown 텍스트 실시간 편집기 웹 애플리케이션",
      text: "Writer는 실시간으로 Markdown 텍스트를 편집하고 HTML 형식으로 렌더링하는 텍스트 편집기입니다. 파일 생성, 이름 변경, 삭제 등 문서 및 폴더 관리 기능을 제공하며, 작성된 텍스트는 MD 또는 HTML 형식으로 저장할 수 있습니다.",
      link: "https://github.com/n3wzd/Writer",
      video: `${publicPath}/Writer-1.mp4`,
      imgList: createImgListPath("Writer"),
      readme: `${publicPath}/text/readme-writer.md`,
    }, {
      title: "RPG Map Generator",
      description: "무작위 RPG 맵 생성기",
      text: "RPG Map Generator는 무작위 RPG 세계를 생성하는 도구입니다. 던전, 동굴, 경로, 자연 등의 맵 생성 방식을 제공합니다. 생성된 맵은 이미지나 json 파일로 추출하여 자신만의 맵으로 활용할 수 있습니다.",
      link: "https://github.com/n3wzd/RPG-map-generator",
      video: `${publicPath}/RPG-map-generator-1.mp4`,
      imgList: createImgListPath("RPG-map-generator"),
      readme: `${publicPath}/text/readme-RPG-map-generator.md`,
    }, {
      title: "Portfolio",
      description: "포트폴리오 웹 사이트",
      text: "개발 프로젝트를 소개하는 포트폴리오 웹 사이트입니다. 기술과 아이디어를 표현하는 것에 중점을 두었습니다.",
      link: "https://github.com/n3wzd/Folio",
      video: `${publicPath}/Folio-1.mp4`,
      imgList: createImgListPath("Folio"),
      readme: `${publicPath}/text/readme-folio.md`,
    }, {
      title: "NETS-Mobility",
      description: "비응급 병원동행 모빌리티 앱 서비스",
      text: "사회적으로 요양 서비스에 대한 수요가 증가하면서 병원 동행 서비스가 새롭게 떠오르고 있습니다. 이 프로젝트는 병원 동행 서비스와 모빌리티 서비스가 결합된 네츠 모빌리티 애플리케이션입니다.",
      link: "https://github.com/NETS-mobility",
      video: `${publicPath}/NETS-app-1.mp4`,
      imgList: createImgListPath("NETS-app"),
      readme: `${publicPath}/text/readme-NETS-app.md`,
    }, {
      title: "COVID-19 백신접종예약",
      description: "백신 조회 및 예약 웹사이트",
      text: "백신 접종 예약 프로젝트는 사용자 주소를 기반으로 병원과 잔여 백신 정보를 제공하여 접근성을 향상하는 것을 목적으로 합니다. 또한, 코로나19 백신 접종 완료자 및 접종 현황 등 팬데믹 상황에서 유용한 정보를 제공합니다.",
      link: "https://github.com/2021-2-DB-VACCINATION/vaccination",
      video: `${publicPath}/vaccination-1.mp4`,
      imgList: createImgListPath("vaccination"),
      readme: `${publicPath}/text/readme-vaccination.md`,
    }
  ];

  const handleButtonClick = (index) => {
    if(index !== pageData.cur && !animate) {
      setPageData({cur: index, prev: pageData.cur});
      setAnimate(true);
      setProjectMenuClassSwap(!projectMenuClassSwap);
      setTimeout(() => setAnimate(false), 700);
    }
  };

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <section id="project-section" className="project-section">
        <h2 className="project-title">Project</h2>
        <div className="project-center">
          <ArrowButton direction="left" onClick={() => handleButtonClick((pageData.cur - 1 + projects.length) % projects.length)} />
            <div className="project-menu-container">
              <div className={`project-menu-section ${projectMenuClassSwap ? "fade-out" : "fade-in"} animate`}>
                <ProjectItem projectData={projects[projectMenuClassSwap ? pageData.prev : pageData.cur]} onClick={openPopup} />
              </div>
              <div className={`project-menu-section ${projectMenuClassSwap ? "fade-in" : "fade-out"} animate`}>
                <ProjectItem projectData={projects[projectMenuClassSwap ? pageData.cur : pageData.prev]} onClick={openPopup} />
              </div>
            </div>
          <ArrowButton direction="right" onClick={() => handleButtonClick((pageData.cur + 1) % projects.length)} />
        </div>
        <div className="navigation-buttons">
          {projects.map((project, index) => (
            <button key={index} onClick={() => handleButtonClick(index)} className={index === pageData.cur ? "selected" : ""}/>
          ))}
        </div>
      </section>
      {isPopupOpen && (
        <ProjectPopup projectData={projects[pageData.cur]} closePopup={closePopup}/>
      )}
    </>
    
  );
}

export default ProjectSection;
