"use client";
import React, { useRef } from "react";
import styles from "./popUp.module.css";
import Image from "next/image";
import cookie from "../../../public/cookie.webp";
import Cookies from "js-cookie";

export function PopUp() {
  const container = useRef(null);

  const remove = (ref) => {
    // Obtenemos el elemento del DOM a partir de la referencia
    const elemento = ref.current;

    // Si el elemento no existe, salimos de la función
    if (!elemento) {
      return;
    }

    // Eliminamos el elemento del DOM
    elemento.parentNode.removeChild(elemento);

    Cookies.set("check", "true");
  };

  return (
    <div ref={container} className={styles.containerAll}>
      <div className={styles.content}>
        <div className={styles.contImage}>
          <div className={styles.contHeader}>
            <h4 className={styles.title}>Utilizamos cookies</h4>
            <Image
              className={styles.imgCookie}
              src={cookie}
              alt="icono cookie"
            />
          </div>
          <p className={styles.description}>
            Usamos cookies para mejorar su experiencia de navegación en nuestra
            web, para mostrarle contenidos personalizados y para analizar el
            tráfico en nuestra web. <span> </span>
            <a className={styles.link} href="/politicas">
              Ver política de cookies
            </a>
          </p>
          <div className={styles.containerBtn}>
            <button
              onClick={() => {
                remove(container);
              }}
              className={styles.btn2}
            >
              rechazar
            </button>
            <button
              onClick={() => {
                remove(container);
              }}
              className={styles.btn}
            >
              aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
