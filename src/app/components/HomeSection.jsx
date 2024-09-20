"use client";
import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import styles from "./homeSection.module.css";
import { Redes } from "./Redes";
import miniatura from "../../../public/miniaturahome.webp";
import { ButtonCta } from "./ButtonCta";
import { ButtonAndroid } from "@/app/components/ButtonAndroid";
import { ButtonIOS } from "@/app/components/ButtonIOS";
import { Dots } from "./Dots";
import { YoutubePlay } from "./../../../public/YoutubeIcon";
import check from "./../../../public/startlanding.webp";
import hero from "../../../public/heromain.webp";
import herotablet from "../../../public/herohometablet.webp";

export const poppins = Poppins({
  weight: ["400", "700", "900"], // Puedes especificar los pesos que necesites
  style: ["normal", "italic"], // Y los estilos que necesites
  subsets: ["latin"],
});

export const HomeSection = () => {
  return (
    <div className={styles.contAll}>
      <div className={`${styles.contHome} ${poppins.className}`}>
        <div className={`${styles.header} ${poppins.className}`}>
          <div className={styles.headerTitle}>
            <h2 className={styles.sbs}>SBS COMPANY</h2>
            <h2 className={styles.title}>¡CA - CHI - PUN!</h2>
          </div>
          <p className={styles.textHome}>
            ¡Te damos la bienvenida al primer torneo online de piedra, papel o
            tijera! Con tan sólo un ticket de ingreso, tendrás la oportunidad de
            participar por premios increíbles. Quienes logren avanzar a la final
            podrán participar de un evento presencial, con viaje y estadía
            pagos. ¿Te gustaría ser parte de esta gran experiencia?
          </p>
          <div className={styles.contCta}>
            <div
              className={`${styles.containerRedesñ} ${styles.containerRedesDis}`}
            >
              <Redes size="70px" />
            </div>
            <Image className={styles.imageHome} alt="icono casa" src={hero} />
            <Image
              className={styles.imageHome2}
              alt="icono casa"
              src={herotablet}
            />
            <div className={styles.containerItemsCta}>
              <ol className={styles.contCheck}>
                <li className={styles.check}>
                  <Image
                    className={styles.imgCheck}
                    src={check}
                    alt="estrella"
                  />
                  <p>Jugás desde el celular</p>
                </li>
                <li className={styles.check}>
                  <Image
                    className={styles.imgCheck}
                    src={check}
                    alt="estrella"
                  />
                  <p>¡Cualquiera puede participar!</p>
                </li>
                <li className={styles.check}>
                  <Image
                    className={styles.imgCheck}
                    src={check}
                    alt="estrella"
                  />
                  <p>Entrada mínima</p>
                </li>
                <li className={styles.check}>
                  <Image
                    className={styles.imgCheck}
                    src={check}
                    alt="estrella"
                  />
                  <p>Grandes premios</p>
                </li>
              </ol>
              <div className={styles.contButtonCta}>
                <ButtonCta text="¡quiero jugar!" />
                <div className={styles.containerBtnsIOSNone2}>
                  <ButtonAndroid />
                  <ButtonIOS />
                </div>
              </div>
            </div>
            <div className={styles.containerMiniaturaNone}>
              <a className={styles.linkVideo} href="#">
                <Image
                  className={styles.miniaturaNone}
                  src={miniatura}
                  alt="miniatura"
                ></Image>
                <div className={styles.containerYoutube}>
                  <YoutubePlay></YoutubePlay>
                </div>
              </a>
              <div className={styles.containerBtnsIOSNone}>
                <ButtonAndroid />
                <ButtonIOS />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.containerMiniatura}>
          <a className={styles.linkVideo} href="#">
            <Image
              className={styles.miniatura}
              src={miniatura}
              alt="miniatura"
            />
            <div className={styles.containerYoutube}>
              <YoutubePlay></YoutubePlay>
            </div>
          </a>
          <div className={styles.containerBtnsIOS}>
            <ButtonAndroid />
            <ButtonIOS />
          </div>
        </div>
        <div className={`${styles.containerRedesNone}`}>
          <Redes size="70px" row={true} />
        </div>
        <Dots />
      </div>
    </div>
  );
};
