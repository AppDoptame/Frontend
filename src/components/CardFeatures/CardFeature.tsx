import React from "react";
import styles from "./CardFeature.module.css";
import {
    FaEnvelope,
    FaBolt,
    FaFlag,
    FaFaceSmile,
    FaScrewdriverWrench,
    FaComment,
} from "react-icons/fa6";

type CardFeatureProps = {
    cardIcon: React.ReactNode;
    cardTitle: String;
    supportingText: string;
};

const CardFeature: React.FC<CardFeatureProps> = ({
    cardIcon,
    cardTitle,
    supportingText,
}) => {
    return (
    <div className={styles.Container}>
        {
        <div className={styles.cardFeature}>
        <div className={styles.Icon}>{cardIcon}</div>
        <div className={styles.cardFeatureText}> 
            <h3 className={styles.Title}>{cardTitle}</h3>
            <p className={styles.text}>{supportingText}</p>
        </div>
        </div>
        }
    </div>
    )
}

export default CardFeature; 