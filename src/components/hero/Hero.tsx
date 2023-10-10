import React from "react";
import styles from "./Hero.module.css";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            REPON SAS<br></br>
            Transformando la Construcción
          </h1>
          <p className={styles.heroDescription}>
            Gestiona, controla y valoriza tus excedentes de obra. ¡Únete a la revolución colombiana
            en construcción sostenible!
          </p>
          <Link className={styles.heroButton} href='/contacto'>
            Contáctenos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
