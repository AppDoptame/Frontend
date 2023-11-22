import React from "react";
import styles from "./Metrics.module.css";

const Metrics = () => {
  return (
    <div className={styles.MetricsContainer}>
      <div className={styles.logo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          viewBox="0 0 28 29"
          fill="none"
        >
          <path
            d="M15.1667 2.94324L3.5 16.9432H14L12.8333 26.2766L24.5 12.2766H14L15.1667 2.94324Z"
            stroke="white"
            stroke-width="2.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

        <p className={styles.mainText}>
          Potencia la adopción más allá de los números.
        </p>
        <p className={styles.subText}>
          Todo lo necesario para crear más familias adoptivas
        </p>
      <section className={styles.metrics_container}>
      <div className={styles.info_container}>
        <p className={styles.Text}>40+</p>
        <p className={styles.subText1}>Adopciones</p>
      </div>
      <div className={styles.info_container}>
        <p className={styles.Text2}>600%</p>
        <p className={styles.subText2}>Retorno de felicidad</p>
      </div>
      <div className={styles.info_container}>
        <p className={styles.Text}>100+</p>
        <p className={styles.subText3}>Familias creadas</p>
      </div>
      </section>
    </div>
  );
};

export default Metrics;
