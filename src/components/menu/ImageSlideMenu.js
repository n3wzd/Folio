import React, { useState } from "react";
import ArrowButton from "../common/ArrowButton.js";
import "../../styles/ImageSlideMenu.css";

export default ({ imgList, firstIndex=0 }) => {
    const [indexData, setIndexData] = useState({cur: firstIndex, prev: firstIndex, direction: 'none'});
    const [animate, setAnimate] = useState(false);

    const resetAnimation = () => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 700);
    }

    const slideLeft = () => {
        if(!animate) {
            setIndexData({cur: (indexData.cur + 1) % imgList.length, prev: indexData.cur, direction: 'left'});
            resetAnimation();
        }
    };

    const slideRight = () => {
        if(!animate) {
            setIndexData({cur: (indexData.cur - 1 + imgList.length) % imgList.length, prev: indexData.cur, direction: 'right'});
            resetAnimation();
        }
    };

    return (
        <div className="image-slide-container">
            <ArrowButton direction="left" onClick={slideRight} />
            <div className="image-slide-menu">
                <img alt={imgList[indexData.cur]} src={imgList[indexData.cur]} className={animate ? (indexData.direction === "left" ? "cur-left-animate" : "cur-right-animate") : ""} />
                <img alt={imgList[indexData.prev]} src={imgList[indexData.prev]} className={animate ? (indexData.direction === "left" ? "prev-left-animate" : "prev-right-animate") : ""} />
            </div>
            <ArrowButton direction="right" onClick={slideLeft} />
        </div>
        
    );
};
