import React, { FC } from "react";
import styles from "./Card.module.css";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const Card: FC<CardProps> = ({ imgSrc, cardTitle, buttonDescription, imagePosition = "left" }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={`${imagePosition === "left" ? styles.imageLeft : styles.imageRight}`}>
          <Image src={imgSrc} alt='Card Decorative Image' width={300} height={200} />
        </div>
        <div className={styles.cardText}>
          <h2 className={styles.cardTitle}>{cardTitle}</h2>
          <hr />
          <Link className={styles.cardButton + " " + poppins.className} href='/contacto'>
            {buttonDescription}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
