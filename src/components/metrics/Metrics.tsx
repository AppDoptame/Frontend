import React from "react";
import styles from "./Metrics.module.css";
import { BsFillClipboard2DataFill } from "react-icons/bs";


const Metrics = () => {
    return (
        <div className={styles.MetricsContainer}>
            <div className={styles.textContainer1}>
                <p className={styles.mainText}>Unleash the full power of data.</p>
                <p className={styles.subText}>Everything you need to convert, engage, and retain more users.</p>
            </div>
            <div className={styles.spacer}></div>
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