import React, { useContext } from "react";

import { AuthContext } from "@/context";
import "./styles.css";
import Image from "next/image";

const TopBar = () => {
  const context = useContext(AuthContext);
  return (
    <div className="topNav">
      <div className="searchBar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="topNavRightContainer">
        <button className="createButton">Create</button>
        <button className="createButton">Create</button>
        <div className="topNavProfileContainer">
          <Image
            className="profilePic"
            src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
            alt="Profile Picture"
            width={10}
            height={10}
          />
          <p>{context.userData.email}</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
