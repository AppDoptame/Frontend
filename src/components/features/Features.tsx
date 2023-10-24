import React from "react";
import styles from "./Features.module.css";

const CardFeature: React.FC<CardFeatureProps>= ({cardIcon, cardTitle, supportingText }) => {
    return (
        <div className={styles.cardFeature}>
            <div className={styles.Icon}>{cardIcon}</div>
            <div className={styles.cardFeatureText}> 
                <h3 className={styles.Title}>{cardTitle}</h3>
                <p className={styles.text}>{supportingText}</p>
            </div>
        </div>
    );
};


export default CardFeature;