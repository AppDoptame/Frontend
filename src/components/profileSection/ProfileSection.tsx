import React from "react";
import "./styles.css";
import Image from "next/image";

type ProfileSectionProps = {};

const ProfileSection: React.FC<ProfileSectionProps> = ({}) => {
  return (
    <div className="profile-section">
      <div className="profile-header">
        <Image
          src="/path-to-your-image.jpg"
          alt="Profile Picture"
          className="profile-image"
          width={50}
          height={50}
        />
        <div className="profile-info">
          <h2 className="profile-name">Your Name</h2>
          <p className="profile-description">Some info about yourself...</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
