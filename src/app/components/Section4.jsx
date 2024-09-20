import Image from "next/image";
import React from "react";
import { DM_Sans } from "next/font/google";
import styles from "./section4.module.css";
import miniatura from "./../../../public/miniaturahome.webp";

import { Dots } from "./Dots";
import { ButtonCta } from "./ButtonCta";

export const dm_sans = DM_Sans({
  weight: ["400", "500", "600", "700", "900"], // Puedes especificar los pesos que necesites
  style: ["normal", "italic"], // Y los estilos que necesites
  subsets: ["latin"],
});

export const Section4 = () => {
  return (
    <div className={`${dm_sans.className} ${styles.containerAll}`}>
      <div className={styles.center}>
        <div className={styles.cont}>
          <h3 className={styles.title}>COMPRA DE TICKETS</h3>
          <div className={styles.containerDescription}>
            <div className={styles.num}>1</div>
            <div className={styles.text}>
              <div className={styles.numNone}>1</div>
              <h4 className={styles.subtitle}>Registrarte en la página</h4>
              <p className={styles.description}>
                Primero tenés que crear tu usuario dentro de esta página. Una
                vez que lo tengas, podrás ingresar a tu panel de usuario y
                seleccionar la opción de “comprar ticket”.
              </p>
            </div>
          </div>
          <div className={styles.containerDescription}>
            <div className={styles.num}>2</div>
            <div className={styles.text}>
              <div className={styles.numNone}>2</div>

              <h4 className={styles.subtitle}>Confirmar el pago </h4>
              <p className={styles.description}>
                Las transacciones se realizarán a través de la plataforma de
                Mercado Pago, para facilitar que uses las opciones que tengas
                disponibles en tu cuenta dentro de esa plataforma.
              </p>
              <div className={styles.containerMiniaturas}>
                <div className={styles.containerMiniatura}>
                  <Image
                    alt="miniatura"
                    className={styles.miniatura}
                    src={miniatura}
                  />
                  <div className={styles.containerTextMiniatura}>
                    <h4 className={styles.titleMiniatura}>¿Cómo comprar?</h4>
                    <p className={styles.descriptionMiniatura}>
                      Cuando confirmes que querés comprar tu ticket, vas a
                      recibir un link de pago que podés abrir con Mercado Pago.
                    </p>
                  </div>
                </div>
                <div className={styles.containerMiniatura}>
                  <Image
                    alt="miniatura de video"
                    className={styles.miniatura}
                    src={miniatura}
                  />
                  <div className={styles.containerTextMiniatura}>
                    <h4 className={styles.titleMiniatura}>
                      ¿Cómo usar tickets?
                    </h4>
                    <p className={styles.descriptionMiniatura}>
                      Una vez que te hayan confirmado la compra, se refleja
                      automáticamente en tu usuario de la app.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.finalContainerDescription}`}>
            <div className={`${styles.num} ${styles.finalNum}`}>3</div>
            <div className={`${styles.text} ${styles.text2}`}>
              <div className={styles.numNone}>3</div>
              <h4 className={styles.subtitle}>¡Ya estás participando!</h4>
              <p className={styles.description}>
                Ahora que tenés tu ticket, ya sos uno de los participantes del
                torneo virtual. ¡Ahora empieza la verdadera aventura Ca-chi-pun!
              </p>
            </div>
          </div>
          <div className={styles.containerCta}>
            <ButtonCta text="quiero jugar" />
          </div>
        </div>
      </div>
      <Dots actualPage={4} />
    </div>
  );
};
