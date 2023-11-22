import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <hr />
      <div className={styles.footerContent}>
        <Link className={styles.footerLogo} href="/">
          <Image
            src="/AppDoptame/logo_transparent_orange_long.png"
            width={150}
            height={55}
            alt=""
          />
        </Link>
        {/* <nav className={styles.navBar}>
          <Link href="/contacto">Contáctenos</Link>
          <Link href="/preguntas-frecuentes">FAQ</Link>
          <Link href="/precios">Precios</Link>
          <Link href="/soporte">Soporte</Link>
        </nav> */}
      </div>
      <div className={styles.footerCopyright + " " + poppins.className}>
        © Copyright 2022, All Rights Reserved by AppDoptame
      </div>
    </div>
  );
};

export default Footer;
