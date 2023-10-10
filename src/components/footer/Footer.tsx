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
        <Link className={styles.footerLogo} href='/'>
          <Image src='/repon/repon.svg' alt='Repon Logo' width={144} height={70} />
        </Link>
        <nav className={styles.navBar}>
          <Link href='/contacto'>Contáctenos</Link>
          <Link href='/preguntas-frecuentes'>FAQ</Link>
          <Link href='/precios'>Precios</Link>
          <Link href='/soporte'>Soporte</Link>
        </nav>
        <Link className={styles.footerLogin} href='/login'>
          INGRESAR
        </Link>
      </div>
      <div className={styles.footerCopyright + " " + poppins.className}>
        © Copyright 2022, All Rights Reserved by Repon
      </div>
    </div>
  );
};

export default Footer;
