import React from "react";
import ButtonLink from  "../components/ButtonLink.js";
import ImageSlideMenu from  "../components/ImageSlideMenu.js";
import "../styles/ProjectPopup.css";

const ProjectPopup = ({ projectData, closePopup }) => {
  return (
    <>
        <div className="popup-overlay" onClick={closePopup}></div>
        <div className="popup">
            <span className="close-btn" onClick={closePopup}>×</span>
            <ImageSlideMenu imgList={projectData.imgList} />
            <h2>{projectData.title}</h2>
            <p>{projectData.description}</p>
            <hr/>
            <p style={{ marginBottom: "24px" }}>{projectData.text}</p>
            <div>
                <ButtonLink text="　View　" href={projectData.link}/>
            </div>
        </div>
    </>
);
};

export default ProjectPopup;
