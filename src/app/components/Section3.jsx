import styles from "./section3.module.css";
import { Poppins } from "next/font/google";
import { ContCarousel } from "./ContCarousel";
import { Dots } from "./Dots";

export const poppins = Poppins({
  weight: ["400", "700", "900"], // Puedes especificar los pesos que necesites
  style: ["normal", "italic"], // Y los estilos que necesites
  subsets: ["latin"],
});

export function Section3({ data }) {
  return (
    <div className={`${styles.contAll} ${poppins.className}`}>
      <div className={styles.containerHeader}>
        {/* <div className={styles.containerRedes}>
          <Redes size="65px" />
        </div> */}
        <div className={styles.containerText}>
          <h1 className={styles.main}>Torneos virtuales</h1>
          <div className={styles.containerDescription}>
            <div>
              <h2 className={styles.title}>¿qué son?</h2>
              <p className={styles.parrafo}>
                Se trata de una competición on-line en la que puedes jugar
                descargando la app en tu celular. Te enfrentarás a participantes
                de diferentes lugares del país que son elegidos al azar. Además
                de jugar por premios asombrosos, los primeros 16 finalistas
                podrán ser parte de una experiencia única. ¿Te gustaría ser uno
                de ellos?
              </p>
            </div>
            <div>
              <h2 className={styles.title}>¿cómo participar?</h2>
              <p className={styles.parrafo}>
                ¡Es muy fácil! Primero tienes que descargar la app en tu
                celular, ya sea desde aquí o a través de Play-Store. Luego
                necesitas obtener un ticket de ingreso único para asegurar tu
                lugar en el torneo junto a los demás participantes. Puedes
                hacerlo desde la app en tu celular o desde esta misma página.
                ¡Sigue explorando!
              </p>
            </div>
          </div>
          {/* <div className={styles.containerRedes2}>
            <Redes size="70px" row={true} />
          </div> */}
        </div>
      </div>

      <ContCarousel fetching={data} />
      {/* <div className={styles.barViolet}></div> */}
      <Dots actualPage={2} />
    </div>
  );
}
