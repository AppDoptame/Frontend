import React from "react";
import "./styles.css";
import Image from "next/image";

const TopBar = () => {
  return (
    <div className="topNav">
      <div className="logo">Logo</div>
      <div className="searchBar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="topNavRightContainer">
        <button className="createButton">Create</button>
        <button className="createButton">Create</button>
        <div className="topNavProfileContainer">
          <Image
            className="profilePic"
            src="/path/to/profilepic.jpg"
            alt="Profile Picture"
            width={10}
            height={10}
          />
          <p>Sebastian</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
