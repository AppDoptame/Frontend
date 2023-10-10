"use client";

import Image from "next/image";
import icon from "../../../public/upload.svg";
import { Dashboard } from "@/components/dashboard/Dashboard";
import "./styles.css";

export default function FilesUpload() {
  const handleFileButtonClick = () => {
    document.getElementById("file-input")?.click();
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Archivo subido:", file);
      // Aquí puedes agregar la lógica para subir el archivo al servidor si es necesario.
    }
  };

  return (
    <Dashboard>
      <section>
        <div className="nav flex justify-between flex-row">
          <h5 className="flex align-center">Archivos subidos</h5>
          <div className="nav-buttons">
            <button className="file-button">Tutorial</button>
            <a
              className="file-button"
              href="/repon/Formato.xlsx" // Ruta relativa al archivo que quieres descargar
              download="Formato.xlsx" // Nombre del archivo que se descargará
            >
              Descargar Formato
            </a>
            <div className="file-button blue" onClick={handleFileButtonClick}>
              <Image
                className="mx-5"
                src={icon}
                width="20"
                height="20"
                alt="Upload Icon"
              />
              <p>Subir archivo</p>
            </div>
            <input
              type="file"
              id="file-input"
              style={{ display: "none" }}
              onChange={handleFileInputChange}
            />
          </div>
        </div>
      </section>
    </Dashboard>
  );
}
