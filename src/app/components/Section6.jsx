import React from "react";
import styles from "./section6.module.css";
import { Redes } from "./Redes";
import Image from "next/image";
import logo2 from "./../../../public/logo2.webp";
import logo3 from "./../../../public/logo3.webp";
import { Dots } from "./Dots";

export const Section6 = () => {
  return (
    <div className={styles.containerAll}>
      <div className={styles.containerLogo}>
        {/* <div className={styles.bg}>
          <Image className={styles.logo} src={logo1} />
        </div> */}
        <div className={`${styles.bg} ${styles.bg2}`}>
          <Image
            alt="logo sbs games"
            className={`${styles.logo} ${styles.logoGames}`}
            src={logo2}
          />
        </div>
        <div className={styles.bg}>
          <Image alt="logotipo" className={styles.logo} src={logo3} />
        </div>
      </div>
      <div className={styles.containerPalabras}>
        <span className={styles.yellow}>¡ENTRÁ,</span>
        {/* <span>, </span> */}
        <span className={styles.blue}>competí,</span>
        {/* <span>, </span> */}
        <span className={styles.red}>GANÁ!</span>
      </div>
      <div className={styles.containerRedes}>
        <Redes size="100px" row={true} />
      </div>
      <div className={`${styles.containerRedes} ${styles.containerRedesNone}`}>
        <Redes size="80px" row={true} />
      </div>
      <Dots actualPage={7} />
    </div>
  );
};
