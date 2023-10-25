import React, { useState, useContext } from "react";

import { AuthContext } from "@/context";
import "./styles.css";
import Image from "next/image";

type ProfileSectionProps = {};

const ProfileSection: React.FC<ProfileSectionProps> = ({}) => {
  const context = useContext(AuthContext);
  {console.log(context.userData)}
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <div className="">
      <div className="">
        <div className="">
        </div>
        <div className="">
          <Image
            src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
            alt="Profile"
            width={150}
            height={150}
          />
        </div>
      </div>

      <div className="">
        <div className="">
          <div className="">
            <h4 className="">Personal Info</h4>
            <ul className="">
              <li className="">
                <span className="">Full name:</span>
                <span className="">Amanda S. Ross</span>
              </li>
              <li className="">
                <span className="">Birthday:</span>
                <span className="">24 Jul, 1991</span>
              </li>
              <li className="">
                <span className="">Joined:</span>
                <span className="">10 Jan 2022 (25 days ago)</span>
              </li>
              <li className="">
                <span className="">Mobile:</span>
                <span className="">(123) 123-1234</span>
              </li>
              <li className="">
                <span className="">Email:</span>
                <span className="">{context.userData.email}</span>
              </li>
              <li className="">
                <span className="">Location:</span>
                <span className="">New York, US</span>
              </li>
              <li className="">
                <span className="">Languages:</span>
                <span className="">English, Spanish</span>
              </li>
              <li className="">
                <span className="">Elsewhere:</span>
                {/* Social icons go here */}
                <a href="#" title="Facebook">
                  {/* Facebook SVG icon */}
                </a>
                <a href="#" title="Twitter">
                  {/* Twitter SVG icon */}
                </a>
                <a href="#" title="LinkedIn">
                  {/* LinkedIn SVG icon */}
                </a>
                <a href="#" title="Github">
                  {/* Github SVG icon */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
