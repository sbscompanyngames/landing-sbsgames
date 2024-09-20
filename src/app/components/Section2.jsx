import React from "react";
import styles from "./section2.module.css";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
import { Redes } from "@/app/components/Redes";
import iconexample from "./../../../public/startlanding.webp";
import { Dots } from "./Dots";
import heroprueba from "./../../../public/hero1.webp";
import hero from "./../../../public/hero2.webp";

export const dm_sans = DM_Sans({
  weight: ["400", "500", "600", "700", "900"], // Puedes especificar los pesos que necesites
  style: ["normal", "italic"], // Y los estilos que necesites
  subsets: ["latin"],
});

export const Section2 = () => {
  return (
    <div className={`${styles.containerSection2} ${dm_sans.className}`}>
      <div className={styles.containerText}>
        <div>
          <h2 className={styles.title}>Torneos Virtuales</h2>
          <p className={styles.description}>
            ¡Animate a ser parte de una aventura Ca-Chi-Pún!
          </p>
        </div>
        <ol className={styles.containerItems}>
          <li className={styles.item}>
            <Image
              alt="icono estrella"
              src={iconexample}
              className={styles.imgItem}
            />
            <span>Podés jugar desde cualquier lugar </span>
          </li>
          <li className={styles.item}>
            <Image
              alt="icono estrella"
              src={iconexample}
              className={styles.imgItem}
            />
            <span>No requiere habilidades especiales</span>
          </li>
          <li className={styles.item}>
            <Image
              alt="icono estrella"
              src={iconexample}
              className={styles.imgItem}
            />
            <span>Los premios son increíbles</span>
          </li>
          <li className={styles.item}>
            <Image
              alt="icono estrella"
              src={iconexample}
              className={styles.imgItem}
            />
            <span>¡La final es en vivo!</span>
          </li>
        </ol>
        <div className={styles.containerRedes}>
          <Redes size="80px" />
          <div className={styles.nombreRedes}>
            <ol>
              <li className={styles.ig}>sbs.games</li>
              <li className={styles.fb}>Sbs Games </li>
              <li className={styles.tw}>Sbsgamess</li>
              <li className={styles.yt}>sbs_games</li>
            </ol>
          </div>
        </div>
        <div className={styles.containerRedes2}>
          <Redes size="70px" row={true} />
        </div>
      </div>

      <div className={styles.containerImages}>
        <Image alt="imagen de celular" className={styles.image1} src={hero} />
        <Image
          alt="imagen de celular"
          className={styles.image2}
          src={heroprueba}
        />
      </div>

      <Dots actualPage={3} />
    </div>
  );
};
