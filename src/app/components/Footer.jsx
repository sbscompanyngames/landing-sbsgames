"use client";
import React, { useState } from "react";
import styles from "./footer.module.css";
import { Redes } from "./Redes";
import Image from "next/image";
import arrow from "../../../public/arrow.webp";
import mail from "../../../public/mail.webp";
import { ButtonCta } from "./ButtonCta";
import Link from "next/link";

export const Footer = ({ homeSelected = true }) => {
  const [email, setEmail] = useState("");

  function isValidEmail(email) {
    // Expresión regular para validar correos electrónicos
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

  function handleSubmit() {
    console.log("hola");
    if (!isValidEmail(email)) {
      // Mostrar una alerta con un mensaje personalizado
      return alert("Por favor, introduce un correo electrónico válido.");
      // Resaltar el campo de entrada
    } else {
      setEmail("");
      return alert("¡Gracias por contactarnos!");
    }
  }

  return (
    <div
      className={`${
        homeSelected
          ? styles.containerAll
          : `${styles.containerAll} ${styles.containerAllNone}`
      }`}
    >
      <h3 className={styles.title}>contacto</h3>
      <div className={styles.containerFooter}>
        <div className={styles.containerBlock}>
          <h5 className={styles.subtitle}>Información</h5>
          <p className={styles.parrafo}>
            ¡Estamos en las redes! Si te interesa nuestra propuesta, si te
            gustaría saber más sobre nosotros o si querés estar al tanto de
            todas las novedades, no dudes en seguirnos.
          </p>
          <div className={styles.containerRedes}>
            <Redes size="75" row={true} />
          </div>
        </div>
        <div className={styles.containerinfoFooter}>
          <div className={`${styles.containerBlock} ${styles.contNavigation}`}>
            <h5 className={styles.subtitle}>Navegación</h5>
            <ol className={styles.containerItems}>
              <li>
                <a href={homeSelected ? "#1" : "/"} className={styles.item}>
                  <Image
                    alt="icono de flecha"
                    className={styles.imgItem}
                    src={arrow}
                  />
                  <span>Homepage</span>
                </a>
              </li>
              <li>
                <a href={homeSelected ? "#3" : "/#3"} className={styles.item}>
                  <Image
                    alt="icono de flecha"
                    className={styles.imgItem}
                    src={arrow}
                  />
                  <span>Torneos Virtuales</span>
                </a>
              </li>
              <li>
                <a href={homeSelected ? "#4" : "/#4"} className={styles.item}>
                  <Image
                    alt="icono de flecha"
                    className={styles.imgItem}
                    src={arrow}
                  />
                  <span>Tickets</span>
                </a>
              </li>
              <li>
                <a href={homeSelected ? "#5" : "/#5"} className={styles.item}>
                  <Image
                    alt="icono de flecha"
                    className={styles.imgItem}
                    src={arrow}
                  />
                  <span>Tutorial</span>
                </a>
              </li>
            </ol>
          </div>
          <div className={styles.containerBlock}>
            <h5 className={styles.subtitle}>contactános</h5>
            <div>
              <ol
                className={`${styles.containerItems} ${styles.containerItemsMb}`}
              >
                <li className={styles.item}>
                  <Image
                    alt="icono de correo"
                    className={styles.imgItem}
                    src={mail}
                  />
                  <span>soporte@sbs-games.com</span>
                </li>
              </ol>
              <div className={styles.containerInp}>
                <input
                  placeholder="e-mail"
                  className={styles.inp}
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    handleSubmit();
                  }}
                  className={styles.suscribe}
                >
                  SUSCRIBIRSE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.containerDis}>
        <h5>Todos los derechos reservados - by sbs company</h5>
        <div className={styles.containerItemDis}>
          {/* <h6>DIsclaimer</h6> */}
          <h6>
            <Link href={"/politicas"}>políticas de privacidad</Link>
          </h6>
          <h6>
            <Link href={"/terminos"}>términos de uso</Link>
          </h6>
        </div>
      </div>
    </div>
  );
};
