import React from "react";
import styles from "./Metrics.module.css";


const Metrics = () => {
    return (
        <div className={styles.MetricsContainer}>
            <div className={styles.logo}><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 28 29" fill="none">
  <path d="M15.1667 2.94324L3.5 16.9432H14L12.8333 26.2766L24.5 12.2766H14L15.1667 2.94324Z" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
            <div className={styles.textContainer1}>
                <p className={styles.mainText}>Unleash the full power of data.</p>
                <p className={styles.subText}>Everything you need to convert, engage, and retain more users.</p>
            </div>
            <div className={styles.cluster1}>
                <p className={styles.Text1}>40+</p>
                <p className={styles.Text2}>600%</p>
                <p className={styles.Text3}>4k+</p>
            </div>
            <div className={styles.cluster2}>
                <p className={styles.subText1}>Integrations</p>
                <p className={styles.subText2}>Return on Investment</p>
                <p className={styles.subText3}>Global Customers</p>
            </div>
        </div>
    );
};

export default Metrics;