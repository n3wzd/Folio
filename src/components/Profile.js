import React from "react";
import ProfilePicture from "../components/ProfilePicture.js";
import "../styles/Profile.css";

const Profile = () => {
  return (
    <div className="profile-section">
        <div className="profile-pic">
            <ProfilePicture></ProfilePicture>
        </div>
        <div className="profile-details">
            <div className="profile-name">Jane Doe</div>
            <div className="profile-bio">
                Hi! I'm Jane, a full-stack developer with a passion for creating interactive applications and websites. I love learning new technologies and applying them to solve real-world problems.
            </div>
        </div>
    </div>
  );
};

export default Profile;
