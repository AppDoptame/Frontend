"use client";
import { useRouter } from "next/navigation";

import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const router = useRouter();
  const NavigateLogin = () => {
    router.push("/login");
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link className={styles.headerLogo} href="/">
          <Image
            src="/AppDoptame/logo_transparent_orange_long.png"
            width={150}
            height={55}
            alt=""
          />
        </Link>
        <nav className={styles.navBar}>
          <Link href="/contacto">Contáctenos</Link>
          <Link href="/preguntas-frecuentes">FAQ</Link>
          <Link href="/precios">Precios</Link>
          <Link href="/soporte">Soporte</Link>
        </nav>
        <button className={styles.headerLogin} onClick={() => NavigateLogin()}>
          Ingresar
        </button>
      </div>
    </header>
  );
};

export default Header;
