import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import styles from "./page.module.css";
import Card from "@/components/card/Card";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <section className={styles.textCard}>
        <h1 className={styles.textCardTitle}>¿Quiénes somos?</h1>
        <p className={styles.textCardDescription}>
          Somos una herramienta creada para organizar, gestionar, controlar sobrantes y excedentes,
          insumos de rotación e inventario muerto que son generados por obras civiles y su red de
          abastecimiento. Hacemos parte de Repón SAS, una empresa colombiana innovadora que le
          gustan las ideas nuevas, el valor agregado e ir más allá. Creada para contribuir,
          transformar y ayudar a solucionar los diferentes retos que están ligados a la
          materialización de proyectos de construcción. La cual, desarrollándose, irá consolidando
          por etapas.
        </p>
      </section>
      <Card
        imgSrc='/repon/working-pc.webp'
        cardTitle={<>Maximiza productividad con REPON SAS.</>}
        buttonDescription='Leer más ...'
        imagePosition='left'
      />
      <Card
        imgSrc='/repon/man-drilling.webp'
        cardTitle={<>Eleva tu proyecto con nosotros.</>}
        buttonDescription='Leer más ...'
        imagePosition='right'
      />
      <Card
        imgSrc='/repon/men-working.webp'
        cardTitle={<>Conéctate y optimiza recursos.</>}
        buttonDescription='Leer más ...'
        imagePosition='left'
      />
      <Footer />
    </div>
  );
}
