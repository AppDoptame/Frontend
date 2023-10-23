import React from "react";
import styles from "./Container.module.css";
import Image from "next/image";

const Container: React.FC = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.containerText}>
                <p>Join 4,000 + companies already growing.</p>
            </div>
            <div className={styles.ContainerLogos}>
                <Image src="/AppDoptame/container/logodanino.png" alt="logodanino" width={150} height={100} />
                <Image src="/AppDoptame/container/logokanu.png" alt="logokanu" width={150} height={130} />
                <Image src="/AppDoptame/container/logotepa.png" alt="logotepa" width={150} height={80} />
            </div>
        </div>
    );
};

export default Container;