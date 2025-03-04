import React, { useState, useEffect, useRef } from "react";
import ButtonLink from  "../components/common/ButtonLink.js";
import ImageSlideMenu from  "../components/menu/ImageSlideMenu.js";
import ProjectReadme from  "../components/menu/ProjectReadme.js";
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
        <ProjectReadme path={projectData.readme} />
    )
}

const ProjectPopup = ({ projectData, closePopup }) => {
    const [activeTab, setActiveTab] = useState('page1');
    const overlayRef = useRef(null);
    const popupRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const overlay = overlayRef.current;
        const popup = popupRef.current;
        const content = contentRef.current;
    
        const handleOuterWheel = (event) => {
            event.stopPropagation();
            event.preventDefault();
        };
        const handleInnerWheel = (event) => {
            event.stopPropagation();
            const isAtTop = content.scrollTop === 0;
            const isAtBottom = content.scrollTop === content.scrollHeight - content.clientHeight;
            if (activeTab === 'page1' || (isAtTop && event.deltaY < 0) || (isAtBottom && event.deltaY > 0)) {
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
                <div className="content" ref={contentRef}>
                    {activeTab === 'page1' && <ProjectPopupPage1 projectData={projectData}/>}
                    {activeTab === 'page2' && <ProjectPopupPage2 projectData={projectData}/>}
                </div>
            </div>
        </>
    );
};

export default ProjectPopup;
