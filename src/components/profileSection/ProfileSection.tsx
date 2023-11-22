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
            <h4 className="">Información personal</h4>
            <ul className="">
              <li className="">
                <span className="">Nombre:</span>
                <span className="">{context.userData.nombre}</span>
              </li>
              <li className="">
                <span className="">Fecha de nacimiento:</span>
                <span className="">{context.userData.fecha_nacimiento}</span>
              </li>
              <li className="">
                <span className="">Celular:</span>
                <span className="">{context.userData.celular}</span>
              </li>
              <li className="">
                <span className="">Correo electrónico:</span>
                <span className="">{context.userData.email}</span>
              </li>
              <li className="">
                <span className="">Ubicacion:</span>
                <span className="">{context.userData.ciudad}, {context.userData.departamento}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
