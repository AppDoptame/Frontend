import React, { useState, useContext } from "react";

import { AuthContext } from "@/context";
import "./styles.css";
import Image from "next/image";

import user from "../../../public/user.svg";

type ProfileSectionProps = {};

const ProfileSection: React.FC<ProfileSectionProps> = ({}) => {
  const context = useContext(AuthContext);
  {console.log(context.userData)}
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <section style={{margin: "20px 50px"}}>
        <div className="">
          <Image
            src={user}
            alt="Profile"
            width={150}
            height={150}
          />
      </div>

      <div className="">
            <h3 className="" style={{margin: "10px 0", color: "var(--orange)"}}>Información personal</h3>

              <div className="" style={{margin: "10px 0"}}>
                <p className="">Nombre: {context.userData.nombre}</p>
              </div>
              <div className="" style={{margin: "10px 0"}}>
                <p className="">Fecha de nacimiento: {context.userData.fecha_nacimiento}</p>
              </div>
              <div className="" style={{margin: "10px 0"}}>
                <p className="">Celular: {context.userData.celular}</p>
              </div>
              <div className="" style={{margin: "10px 0"}}>
                <p className="">Correo electrónico: {context.userData.email}</p>
              </div>
              <div className="" style={{margin: "10px 0"}}>
                <p className="">Ubicacion: {context.userData.ciudad}, {context.userData.departamento}</p>
              </div>
          </div>
    </section>
  );
};

export default ProfileSection;
