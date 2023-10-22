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
          Bienvenidos a AppDoptaMe, la plataforma digital que facilita el enlace
          amoroso entre mascotas en espera de un hogar y corazones dispuestos a
          adoptar. Surgimos como una respuesta compasiva al desafío del abandono
          animal en Colombia, ofreciendo una solución sencilla y confiable para
          aquellos que deseen adoptar o dar en adopción. Nos entusiasma la idea
          de ser el puente que conecta a estas criaturas leales con individuos y
          familias amorosas. A través de nuestra aplicación, simplificamos el
          proceso de adopción, permitiendo a los usuarios descubrir, conectar y
          formalizar adopciones de manera segura y confiable. Con AppDoptaMe,
          cada clic acerca a una mascota a su nuevo hogar, y a una familia a su
          nuevo compañero de vida.
        </p>
      </section>
      <Card
        imgSrc="/repon/working-pc.webp"
        cardTitle={<>Descubre Tu Compañero Ideal</>}
        buttonDescription=" Nuestra aplicación proporciona una galería diversa de perfiles de mascotas que esperan ser adoptadas. Cada perfil contiene información detallada como la edad, tamaño, raza, temperamento y salud del animal, además de fotografías encantadoras. Puedes explorar y filtrar búsqueda según tus preferencias, ayudándote a encontrar a tu compañero ideal.."
        imagePosition="left"
      />
      <Card
        imgSrc="/repon/man-drilling.webp"
        cardTitle={<>Adopción Segura y Transparente</>}
        buttonDescription="AppDoptaMe guía a los adoptantes y a los que desean dar en adopción a través de un proceso paso a paso, asegurando que todas las partes estén bien informadas y preparadas. Con verificaciones de perfil, chats seguros dentro de la app y guías de adopción, nos esforzamos por hacer de la adopción una experiencia segura, transparente y gratificante."
        imagePosition="right"
      />
      <Card
        imgSrc="/repon/men-working.webp"
        cardTitle={<>Historias que Tocan el Corazón</>}
        buttonDescription="En AppDoptaMe, creemos que cada mascota tiene una historia que merece ser contada. Descubre las conmovedoras trayectorias de rescate y recuperación de nuestras mascotas, y cómo han superado adversidades en su camino hacia un nuevo comienzo. Al compartir estas historias, esperamos crear una conexión emocional y fomentar una comunidad más empática y consciente."
        imagePosition="left"
      />

      <Footer />
    </div>
  );
}
