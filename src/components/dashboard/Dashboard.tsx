import React, { ReactNode } from "react";
import Image from "next/image";

import "./styles.css";
import restock from "../../../public/logo-restock.svg";
import mail from "../../../public/mail.svg";
import bell from "../../../public/bell.svg";
import circle from "../../../public/circle.svg";

interface DashboardProps {
  children: ReactNode;
}

export const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  return (
    <section>
      <nav className="flex justify-between header-bar ">
        <div className="flex align-center gap-10">
          <Image src={restock} width="50" height="40" alt="Restock Logo" />
          <h3>Restock</h3>
        </div>

        <div className="flex align-center gap-20">
          <Image src={mail} width="30" height="28" alt="Mail Logo" />
          <Image src={bell} width="25" height="25" alt="Notifications Logo" />
          <Image src={circle} width="40" height="25" alt="Profile picture" />
        </div>
      </nav>
      <div className="container">
        <aside className="lateral-navigation">
          <button className="dashboard-button">Dashboard</button>
          <div>
            <div style={{ marginBottom: "20px" }}>
              <blockquote>ANALISIS</blockquote>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <Image
                  src="/cursor-click.png"
                  width="25"
                  height="25"
                  alt="Restock Logo"
                />
                <button className="nav-button">Chat Bot</button>
              </div>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <blockquote>CUENTAS</blockquote>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <Image
                  src="/user.png"
                  width="25"
                  height="25"
                  alt="Restock Logo"
                />
                <button className="nav-button">Empleados</button>
              </div>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <blockquote>INVENTARIO</blockquote>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <Image
                  src="/folder.png"
                  width="25"
                  height="25"
                  alt="Restock Logo"
                />
                <button className="nav-button">Archivos</button>
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <Image
                  src="/bell.png"
                  width="25"
                  height="25"
                  alt="Restock Logo"
                />
                <button className="nav-button">Alertas</button>
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <Image
                  src="/chart-square-bar.png"
                  width="25"
                  height="25"
                  alt="Restock Logo"
                />
                <button className="nav-button">Productos</button>
              </div>
            </div>
            <div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <Image
                  src="/cog.png"
                  width="25"
                  height="25"
                  alt="Restock Logo"
                />
                <button className="nav-button">Configuracion</button>
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <Image
                  src="/logout.png"
                  width="25"
                  height="25"
                  alt="Restock Logo"
                />
                <button className="nav-button">Cerrar Sesion</button>
              </div>
            </div>
          </div>
        </aside>
        <div className="content-dashboard">{children}</div>
      </div>
    </section>
  );
};
