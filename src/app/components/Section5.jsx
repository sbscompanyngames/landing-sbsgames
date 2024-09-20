import React from "react";
import styles from "./section5.module.css";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { ButtonCta } from "./ButtonCta";
import { Dots } from "./Dots";
import miniatura from "./../../../public/miniaturahome.webp";

export const poppins = Poppins({
  weight: ["400", "700", "900"], // Puedes especificar los pesos que necesites
  style: ["normal", "italic"], // Y los estilos que necesites
  subsets: ["latin"],
});

export const Section5 = () => {
  return (
    <div className={styles.contSup}>
      <div className={`${styles.containerAll} ${poppins.className}`}>
        <h3 className={styles.title}>Tutorial</h3>
        <h5 className={styles.subtitle}>¿Cómo Jugar?</h5>
        <p className={styles.description}>
          ¡Esta es la parte más divertida! Sólo tenés que entrar en la
          aplicación de tu celular y empezar a jugar. Los enfrentamientos
          estarán planificados y vas a recibir notificaciones antes de cada
          encuentro para asegurarnos de que puedas participar.
        </p>
        <div className={styles.containerVideos}>
          <a href="">
            <div className={styles.containerMiniatura} href="#">
              <Image
                alt="miniatura de video"
                className={styles.miniatura}
                src={miniatura}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="90"
                height="90"
                display="block"
                pointerEvents="none"
              >
                <g fill="none" fillRule="evenodd">
                  <path d="M1 1h21.77v22H1z"></path>
                  <g fillRule="nonzero">
                    <path
                      fill="red"
                      d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v1.66c.04 1.78.26 3.55.26 3.55s.2 1.5.86 2.18c.83.87 1.9.84 2.4.94 1.7.15 7.2.2 7.38.2 0 0 4.57 0 7.6-.22.43-.05 1.35-.06 2.18-.93.65-.67.86-2.18.86-2.18s.22-1.77.24-3.55v-1.66c-.02-1.78-.24-3.55-.24-3.55z"
                    ></path>
                    <path fill="#FAFAFA" d="M9.68 8.9v6.18l5.84-3.1"></path>
                    <path
                      fill="#000"
                      fillOpacity="0.12"
                      d="M9.68 8.88l5.13 3.48.73-.38"
                    ></path>
                    <path
                      fill="#FFF"
                      fillOpacity="0.2"
                      d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v.1c.04-1.76.26-3.54.26-3.54s.2-1.5.86-2.17c.83-.88 1.75-.88 2.18-.93 3.04-.22 7.6-.2 7.6-.2s4.56-.02 7.6.2c.43.05 1.35.05 2.18.93.65.66.86 2.17.86 2.17s.22 1.78.23 3.55v-.1c0-1.8-.23-3.56-.23-3.56z"
                    ></path>
                    <path
                      fill="#3E2723"
                      fillOpacity="0.2"
                      d="M22.54 16.4s-.2 1.5-.86 2.17c-.83.87-1.75.88-2.18.93-3.04.22-7.6.2-7.6.2s-4.56.02-7.6-.2c-.43-.05-1.35-.06-2.18-.93-.65-.67-.86-2.18-.86-2.18s-.22-1.8-.26-3.57v-.1c.04 1.76.26 3.54.26 3.54s.2 1.5.86 2.17c.83.88 1.75.88 2.18.93 3.04.22 7.6.2 7.6.2s4.56.02 7.6-.2c.43-.05 1.35-.05 2.18-.93.65-.66.86-2.17.86-2.17s.22-1.78.23-3.55v.1c0 1.8-.23 3.56-.23 3.56z"
                    ></path>
                    <path
                      fill="#FFF"
                      fillOpacity="0.2"
                      d="M9.68 15.08v.1l5.84-3.08v-.12"
                    ></path>
                    <path
                      fill="#3E2723"
                      fillOpacity="0.2"
                      d="M9.68 8.9v-.13l5.84 3.1v.1"
                    ></path>
                    <path
                      fill='url("#youtube_round__a")'
                      fillOpacity="0.1"
                      d="M21.54 3.4s-.2-1.5-.86-2.18C19.85.35 18.93.35 18.5.3 15.46.07 10.9.1 10.9.1S6.34.07 3.3.3c-.43.05-1.35.05-2.18.92C.47 1.9.26 3.4.26 3.4S.04 5.17 0 6.95V8.6c.04 1.8.26 3.56.26 3.56s.2 1.52.86 2.18c.83.87 1.9.85 2.4.94 1.7.16 7.2.2 7.38.2 0 0 4.57 0 7.6-.2.43-.06 1.35-.07 2.18-.94.65-.66.86-2.18.86-2.18s.22-1.77.24-3.55V6.97c-.02-1.78-.24-3.55-.24-3.55z"
                      transform="translate(1 4.208)"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </a>
          <a href="">
            <div className={styles.containerMiniatura} href="#">
              <Image
                alt="miniatura de video explicativo"
                className={styles.miniatura}
                src={miniatura}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="90"
                height="90"
                display="block"
                pointerEvents="none"
              >
                <g fill="none" fillRule="evenodd">
                  <path d="M1 1h21.77v22H1z"></path>
                  <g fillRule="nonzero">
                    <path
                      fill="red"
                      d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v1.66c.04 1.78.26 3.55.26 3.55s.2 1.5.86 2.18c.83.87 1.9.84 2.4.94 1.7.15 7.2.2 7.38.2 0 0 4.57 0 7.6-.22.43-.05 1.35-.06 2.18-.93.65-.67.86-2.18.86-2.18s.22-1.77.24-3.55v-1.66c-.02-1.78-.24-3.55-.24-3.55z"
                    ></path>
                    <path fill="#FAFAFA" d="M9.68 8.9v6.18l5.84-3.1"></path>
                    <path
                      fill="#000"
                      fillOpacity="0.12"
                      d="M9.68 8.88l5.13 3.48.73-.38"
                    ></path>
                    <path
                      fill="#FFF"
                      fillOpacity="0.2"
                      d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v.1c.04-1.76.26-3.54.26-3.54s.2-1.5.86-2.17c.83-.88 1.75-.88 2.18-.93 3.04-.22 7.6-.2 7.6-.2s4.56-.02 7.6.2c.43.05 1.35.05 2.18.93.65.66.86 2.17.86 2.17s.22 1.78.23 3.55v-.1c0-1.8-.23-3.56-.23-3.56z"
                    ></path>
                    <path
                      fill="#3E2723"
                      fillOpacity="0.2"
                      d="M22.54 16.4s-.2 1.5-.86 2.17c-.83.87-1.75.88-2.18.93-3.04.22-7.6.2-7.6.2s-4.56.02-7.6-.2c-.43-.05-1.35-.06-2.18-.93-.65-.67-.86-2.18-.86-2.18s-.22-1.8-.26-3.57v-.1c.04 1.76.26 3.54.26 3.54s.2 1.5.86 2.17c.83.88 1.75.88 2.18.93 3.04.22 7.6.2 7.6.2s4.56.02 7.6-.2c.43-.05 1.35-.05 2.18-.93.65-.66.86-2.17.86-2.17s.22-1.78.23-3.55v.1c0 1.8-.23 3.56-.23 3.56z"
                    ></path>
                    <path
                      fill="#FFF"
                      fillOpacity="0.2"
                      d="M9.68 15.08v.1l5.84-3.08v-.12"
                    ></path>
                    <path
                      fill="#3E2723"
                      fillOpacity="0.2"
                      d="M9.68 8.9v-.13l5.84 3.1v.1"
                    ></path>
                    <path
                      fill='url("#youtube_round__a")'
                      fillOpacity="0.1"
                      d="M21.54 3.4s-.2-1.5-.86-2.18C19.85.35 18.93.35 18.5.3 15.46.07 10.9.1 10.9.1S6.34.07 3.3.3c-.43.05-1.35.05-2.18.92C.47 1.9.26 3.4.26 3.4S.04 5.17 0 6.95V8.6c.04 1.8.26 3.56.26 3.56s.2 1.52.86 2.18c.83.87 1.9.85 2.4.94 1.7.16 7.2.2 7.38.2 0 0 4.57 0 7.6-.2.43-.06 1.35-.07 2.18-.94.65-.66.86-2.18.86-2.18s.22-1.77.24-3.55V6.97c-.02-1.78-.24-3.55-.24-3.55z"
                      transform="translate(1 4.208)"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </a>
        </div>
        <p className={`${styles.description} ${styles.description2}`}>
          Ya estás siendo parte de esta emocionante aventura, ¿estás listo?
        </p>
        <div className={styles.contCta}>
          <ButtonCta text="suscribirme" href="#8" hover={false} />
        </div>
      </div>
      <Dots actualPage={5} />
    </div>
  );
};
