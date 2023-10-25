import React from "react";
import styles from "./FeaturesContainer.module.css";

const FeaturesContainer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.subHeading}>Features</div>
            <h1 className={styles.heading}>Analytics that feels like it's from the future</h1>
            <p className={styles.Text}>
                Poderosa, intuitiva y amigable, Appdoptame te ayuda a descubir, conectar y adoptar el compañero perfecto. Confía en la plataforma que ha tocado el corazon de numerosas familias
            </p>
        </div>
    );
};

export default FeaturesContainer;