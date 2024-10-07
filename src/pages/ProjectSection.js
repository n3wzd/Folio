import React, { useState } from 'react';
import ProjectItem from "../components/ProjectItem.js";
import ArrowButton from "../components/ArrowButton.js";
import ProjectPopup from "./ProjectPopup.js";
import "../styles/ProjectSection.css";

const ProjectSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [pageData, setPageData] = useState({cur: 0, prev: 0});
  const [projectMenuClassSwap, setProjectMenuClassSwap] = useState(false);
  const [animate, setAnimate] = useState(false);

  const projects = [{
      title: "FlutPlayer",
      description: "음원 재생 안드로이드 & 윈도우 애플리케이션",
      text: "FlutPlayer는 음원 재생 환경에서 사용자의 편의성을 향상시키기 위해 개발되었습니다. 안드로이드와 윈도우 플랫폼에서 일관된 오디오 경험을 제공하며, 태그 관리, 이퀄라이저, 비주얼라이저 등 사용자 맞춤 설정 기능을 포함하고 있습니다. 매시업 모드와 커스텀 백그라운드 기능을 통해 보다 다채로운 재생 경험을 제공합니다.",
      link: "https://github.com/n3wzd/FlutPlayer",
      video: "FlutPlayer-1.mp4",
      imgList: ["FlutPlayer-2.png", "FlutPlayer-3.png", "FlutPlayer-4.png", "FlutPlayer-5.png"],
      readme: "readme-flutplayer.md",
    }, {
      title: "Writer",
      description: "Markdown 텍스트 실시간 편집기 웹 애플리케이션",
      text: "Markdown 텍스트를 작성하고 실시간으로 편집할 수 있으며, 여러 텍스트 파일을 생성하고 저장할 수 있습니다. 또한, 파일의 이름을 변경하거나 삭제할 수 있는 기능도 제공합니다. 작성한 파일은 MD 또는 HTML 형식으로 저장할 수 있으며, 기존의 MD 및 TEXT 파일을 불러오는 것도 가능합니다.",
      link: "https://github.com/n3wzd/Writer",
      video: "Writer-1.mp4",
      imgList: ["Writer-2.png", "Writer-3.png", "Writer-4.png", "Writer-5.png"],
      readme: "readme-writer.md",
    }, {
      title: "RPG Map Generator",
      description: "무작위 RPG 맵 생성기",
      text: "맵 생성 방식은 던전(BSP), 동굴(셀룰러 오토마타), 평원, 자연(Simplex Noise)으로 구분됩니다. 경로 생성은 A* 알고리즘을 사용하고, 타일 테마를 선택한 후 랜덤하게 구역 타일(물, 카펫 등)과 장식 타일(바닥, 벽)을 배치합니다.",
      link: "https://github.com/n3wzd/RPG-map-generator",
      video: "RPG-map-generator-1.mp4",
      imgList: ["RPG-map-generator-2.png", "RPG-map-generator-3.png", "RPG-map-generator-4.png", "RPG-map-generator-5.png"],
      readme: "readme-flutplayer.md",
    }, {
      title: "Portfolio 2024",
      description: "포트폴리오 사이트",
      text: "개발 프로젝트를 소개하는 웹사이트입니다.",
      link: "https://github.com/n3wzd/Folio",
      video: "FlutPlayer-1.mp4",
      imgList: ["FlutPlayer-2.png", "FlutPlayer-3.png", "FlutPlayer-4.png", "FlutPlayer-5.png"],
      readme: "readme-flutplayer.md",
    }, {
      title: "NETS App",
      description: "Meven+ 병원동행 모빌리티 앱",
      text: "고객용 앱, 매니저용 앱, 관리자용 웹 3가지가 있습니다.",
      link: "https://github.com/NETS-mobility",
      video: "NETS-app-1.mp4",
      imgList: ["NETS-app-2.png", "NETS-app-3.png", "NETS-app-4.png", "NETS-app-5.png"],
      readme: "readme-flutplayer.md",
    }, {
      title: "COVID-19 백신접종예약",
      description: "백신 조회 및 예약 웹사이트",
      text: "코로나19 백신 접종 완료자 및 접종 현황을 볼 수 있습니다. 접종 현황은 지역별, 연령별로 구분되서 제공됩니다. 회원가입 및 로그인을 진행하면 백신 예약을 할 수 있으며, 마이페이지에서 정보 수정이 가능합니다. 예약번호를 통한 간편 조회가 가능하며, 잔여 백신 및 기관 조회를 할 수 있습니다.",
      link: "https://github.com/2021-2-DB-VACCINATION/vaccination",
      video: "vaccination-1.mp4",
      imgList: ["vaccination-2.png", "vaccination-3.png", "vaccination-4.png", "vaccination-5.png"],
      readme: "readme-flutplayer.md",
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
