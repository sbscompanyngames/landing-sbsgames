"use client";
import React, { useState } from "react";
import styles from "./formSection.module.css";
import { Dots } from "./Dots";
import Image from "next/image";
import emogi from "../../../public/emogi.webp";

export const FormSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function isValidEmail(email) {
    // Expresión regular para validar correos electrónicos
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

  function handleSubmit() {
    const data = {
      name,
      email,
      message,
    };

    // fetch(
    //   "https://script.google.com/macros/s/AKfycby9Rl8m4xoS7ytZDL9arKf-Yh80dUU7B62wkJ6-N7tdVolJB1wc-qIVZeQV-1y0SOKxKg/exec",
    //   {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //   }
    // ).then((response) => {
    //   if (response.ok) {
    //     alert("¡Datos agregados correctamente!");
    //     // Restablece los estados
    //     setName("");
    //     setEmail("");
    //     setMessage("");
    //   } else {
    //     alert("¡Error al enviar los datos!");
    //   }
    // });

    if (!isValidEmail(email)) {
      // Mostrar una alerta con un mensaje personalizado
      return alert("Por favor, introduce un correo electrónico válido.");

      // Resaltar el campo de entrada
    } else {
      alert("¡Gracias por contactarnos!");
      setEmail("");
      setMessage("");
      setName("");
    }
  }

  return (
    <div className={styles.containerAll}>
      <div className={styles.containerText}>
        <div className={styles.header}>
          <h5 className={styles.hello}>
            ¡Hola!{" "}
            <Image className={styles.emogiIcon} src={emogi} alt="icono emogi" />
          </h5>
          <h5 className={styles.subtitle}>¿Conversamos?</h5>
        </div>
        <form className={styles.containerFormText}>
          <p className={styles.paragraph}>
            Disfrutamos tener un buen contacto con nuestro público. Si tenés un
            mensaje, una propuesta o algún comentario que nos quieras compartir,
            acá te dejamos el espacio para hacerlo. <br /> <br /> ¡Muchas
            gracias por ser parte de esta aventura!
          </p>
          <div className={styles.form}>
            <div className={styles.containerForm}>
              <input
                className={styles.inp}
                type="text"
                placeholder="Nombre"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                name="name"
              />
              <input
                className={styles.inp}
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                name="email"
              />
              <textarea
                className={`${styles.inp} ${styles.texta}`}
                placeholder="Mensaje"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                value={message}
                name="message"
              ></textarea>
            </div>
            <button
              onClick={() => {
                handleSubmit();
              }}
              className={styles.btnSend}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      <Dots actualPage={6} />
    </div>
  );
};
