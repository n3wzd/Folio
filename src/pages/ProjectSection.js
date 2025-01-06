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

  const publicPath = process.env.PUBLIC_URL;
  const createImgListPath = (name) => Array.from({ length: 4 }, (_, i) => `${publicPath}/${name}-${i + 2}.png`)

  const projects = [{
      title: "FlutPlayer",
      description: "음원 재생 안드로이드 & 윈도우 애플리케이션",
      text: "FlutPlayer는 음원 재생 환경에서 사용자의 편의성을 향상시키기 위해 개발되었습니다. 안드로이드와 윈도우 플랫폼에서 일관된 오디오 경험을 제공하며, 태그 관리, 이퀄라이저, 비주얼라이저 등 사용자 맞춤 설정 기능을 포함하고 있습니다. 매시업 모드와 커스텀 백그라운드 기능을 통해 보다 다채로운 재생 경험을 제공합니다.",
      link: "https://github.com/n3wzd/FlutPlayer",
      video: `${publicPath}/FlutPlayer-1.mp4`,
      imgList: createImgListPath("FlutPlayer"),
      readme: `${publicPath}/readme-flutplayer.md`,
    }, {
      title: "Writer",
      description: "Markdown 텍스트 실시간 편집기 웹 애플리케이션",
      text: "Writer는 실시간으로 Markdown 텍스트를 편집하고 HTML 형식으로 변환할 수 있는 편리한 텍스트 편집기입니다. 사용자가 작성하는 동안 Markdown 패턴이 실시간으로 분석되고 UI에 반영되어 더 효율적인 작업이 가능합니다. 또한, 파일 생성, 이름 변경, 삭제 등 문서 및 폴더 관리 기능을 제공하며, 작성된 텍스트는 MD 또는 HTML 형식으로 저장할 수 있습니다.",
      link: "https://github.com/n3wzd/Writer",
      video: `${publicPath}/Writer-1.mp4`,
      imgList: createImgListPath("Writer"),
      readme: `${publicPath}/readme-writer.md`,
    }, {
      title: "RPG Map Generator",
      description: "무작위 RPG 맵 생성기",
      text: "RPG Map Generator는 무작위 RPG 세계를 생성하는 도구입니다. 던전, 동굴, 경로, 자연 등의 맵 생성 방식을 제공합니다. 선택한 타일 테마에 따라 구역 타일과 장식 타일을 랜덤하게 배치하여 매번 새롭고 독특한 맵을 제공합니다. 생성된 맵은 이미지나 json 파일로 추출하여 자신만의 맵으로 활용할 수 있습니다.",
      link: "https://github.com/n3wzd/RPG-map-generator",
      video: `${publicPath}/RPG-map-generator-1.mp4`,
      imgList: createImgListPath("RPG-map-generator"),
      readme: `${publicPath}/readme-RPG-map-generator.md`,
    }, {
      title: "Portfolio 2024",
      description: "포트폴리오 웹 사이트",
      text: "개발 프로젝트를 소개하는 포트폴리오 웹 사이트입니다. 웹 사이트를 직접 제작하는 과정을 통해 더 깊이 있는 경험을 얻고자 하는 목표에서 시작되었습니다. 제 기술과 아이디어를 직접 구현함으로써, 더 나만의 스타일을 강조하고, 직접 만든 사이트를 통해 웹 개발에 대한 이해도를 높이며, 미래 프로젝트에서도 더 나은 결과물을 만들 수 있는 기반을 다지고자 했습니다.",
      link: "https://github.com/n3wzd/Folio",
      video: `${publicPath}/Folio-1.mp4`,
      imgList: createImgListPath("Folio"),
      readme: `${publicPath}/readme-folio.md`,
    }, {
      title: "NETS-Mobility",
      description: "비응급 병원동행 모빌리티 앱 서비스",
      text: "사회적으로 요양 서비스에 대한 수요가 증가하면서 병원 동행 서비스가 새롭게 떠오르고 있습니다. 만약 병원 동행과 모빌리티가 결합되면 편리함, 접근성이 높아질 것입니다. 이 프로젝트는 웹으로 제공되고 있는 병원 동행 서비스인 고위드유에 모빌리티 서비스가 추가된 네츠 모빌리티 앱을 개발하는 것이 목표입니다.",
      link: "https://github.com/NETS-mobility",
      video: `${publicPath}/NETS-app-1.mp4`,
      imgList: createImgListPath("NETS-app"),
      readme: `${publicPath}/readme-NETS-app.md`,
    }, {
      title: "COVID-19 백신접종예약",
      description: "백신 조회 및 예약 웹사이트",
      text: "코로나19 백신 접종 완료자 및 접종 현황을 볼 수 있습니다. 접종 현황은 지역별, 연령별로 구분되서 제공됩니다. 회원가입 및 로그인을 진행하면 백신 예약을 할 수 있으며, 마이페이지에서 정보 수정이 가능합니다. 예약번호를 통한 간편 조회가 가능하며, 잔여 백신 및 기관 조회를 할 수 있습니다.",
      link: "https://github.com/2021-2-DB-VACCINATION/vaccination",
      video: `${publicPath}/vaccination-1.mp4`,
      imgList: createImgListPath("vaccination"),
      readme: `${publicPath}/readme-vaccination.md`,
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
