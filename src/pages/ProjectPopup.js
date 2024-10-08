import React, { useState, useEffect, useRef } from "react";
import ButtonLink from  "../components/ButtonLink.js";
import ImageSlideMenu from  "../components/ImageSlideMenu.js";
import ProjectReadme from  "../components/ProjectReadme.js";
import "../styles/ProjectPopup.css";

const ProjectPopupPage1 = ({ projectData }) => {
    return (
        <>
            <ImageSlideMenu imgList={projectData.imgList} />
            <h2>{projectData.title}</h2>
            <p>{projectData.description}</p>
            <hr/>
            <p style={{ marginBottom: "24px" }}>{projectData.text}</p>
            <div>
                <ButtonLink text="View" href={projectData.link}/>
            </div>
        </>
    )
}

const ProjectPopupPage2 = ({ projectData }) => {
    return (
        <ProjectReadme fileName={projectData.readme} />
    )
}

const ProjectPopup = ({ projectData, closePopup }) => {
    const [activeTab, setActiveTab] = useState('page1');
    const overlayRef = useRef(null);
    const popupRef = useRef(null);

    useEffect(() => {
        const overlay = overlayRef.current;
        const popup = popupRef.current;
    
        const handleOuterWheel = (event) => {
            event.stopPropagation();
            event.preventDefault();
        };
        const handleInnerWheel = (event) => {
            event.stopPropagation();
            if(activeTab === 'page1') {
                event.preventDefault();
            }
        };
    
        if (overlay) {
            overlay.addEventListener('wheel', handleOuterWheel, { passive: false });
        }
        if (popup) {
            popup.addEventListener('wheel', handleInnerWheel, { passive: false });
        }
    
        return () => {
          if (overlay) {
            overlay.removeEventListener('wheel', handleOuterWheel);
          }
          if (popup) {
            popup.removeEventListener('wheel', handleInnerWheel);
          }
        };
      }, [activeTab]);

    return (
        <>
            <div className="popup-overlay" onClick={closePopup} ref={overlayRef}></div>
            <div className="popup" ref={popupRef}>
                <span className="close-btn" onClick={closePopup}>×</span>
                <div className="tabs">
                    <button className={`tab ${activeTab === 'page1' ? 'active' : ''}`} onClick={() => setActiveTab('page1')}>INTRO</button>
                    <button className={`tab ${activeTab === 'page2' ? 'active' : ''}`} onClick={() => setActiveTab('page2')}>README</button>
                </div>
                <div className="content">
                    {activeTab === 'page1' && <ProjectPopupPage1 projectData={projectData}/>}
                    {activeTab === 'page2' && <ProjectPopupPage2 projectData={projectData}/>}
                </div>
            </div>
        </>
    );
};

export default ProjectPopup;
