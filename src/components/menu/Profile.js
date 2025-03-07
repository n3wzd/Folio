import React from "react";
import Cube from "../background/Cube.js";
import "../../styles/Profile.css";

const Profile = () => {
  return (
    <div className="profile-section">
        <div className="profile-pic">
            <Cube></Cube>
        </div>
        <div className="profile-details">
            <div className="profile-name">장형준</div>
            <div className="profile-bio">
              저는 TypeScript, Node.js, React, Spring, Flutter 등을 활용한 풀스택 개발 경험을 갖춘 개발자입니다. 문제 해결 능력과 책임감을 바탕으로 다양한 프로젝트를 효율적으로 완수할 수 있으며, 끈기 있게 새로운 기술을 습득하며 성장해왔습니다.
            </div>
        </div>
    </div>
  );
};

export default Profile;
