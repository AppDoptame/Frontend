import React from "react";
import styles from "./Hero.module.css";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            AppDoptame<br></br>
            Transformando La Adopcion De Mascotas
          </h1>
          <p className={styles.heroDescription}>
            Descubre, conecta y adopta tu nuevo mejor amigo. ¡Únete a la
            revolución colombiana de amor y cuidado animal con AppDoptaMe!
          </p>
          <Link className={styles.heroButton} href="/contacto">
            Contáctenos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
