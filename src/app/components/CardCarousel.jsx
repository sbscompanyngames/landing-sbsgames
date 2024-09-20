"use client";
import React from "react";
import styles from "./cardCarousel.module.css";
import { Black_And_White_Picture, Inter } from "next/font/google";
import Image from "next/image";
import miniatura from "@/../../public/miniaturacard.webp";
import icon1 from "@/../../public/iconcard1.webp";
import icon2 from "@/../../public/iconcard2.webp";
import icon3 from "@/../../public/iconcard3.webp";
import bg1 from "@/../../public/bgcard1.webp";
import bg2 from "@/../../public/bgcard2.webp";
import bg3 from "@/../../public/bgcard3.webp";
import bg4 from "@/../../public/bgcard4.webp";

export const inter = Inter({
  weight: ["400", "500", "600", "700", "900"], // Puedes especificar los pesos que necesites
  style: ["normal"], // Y los estilos que necesites
  subsets: ["latin"],
});

export const CardCarousel = ({
  bg = 0,
  name = "Torneo Semanal Virtual- Luján",
  price = "2.500",
  location = "Mendoza, Luján",
  date = "10 Jan, 2023, 10:00",
  concurrent = "68%",
  image = miniatura,
}) => {
  return (
    <div
      className={`${styles.containerCard} ${inter.className} ${
        bg == 0
          ? styles.bg1
          : bg == 1
          ? styles.bg2
          : bg == 2
          ? styles.bg3
          : bg == 3
          ? styles.bg4
          : null
      }`}
    >
      <Image
        alt="miniatura"
        className={styles.miniatura}
        src={image}
        width={270}
        height={160}
      />
      <div className={styles.containerDatos}>
        <h3 className={styles.titleCard}>{name}</h3>
        <ol className={styles.containerItems}>
          <li className={styles.item}>
            <Image alt="icono" className={styles.imgIcon} src={icon1} />
            <span>{date}</span>
          </li>
          <li className={styles.item}>
            <Image alt="icono" className={styles.imgIcon} src={icon2} />

            <span>{location}</span>
          </li>
          <li className={styles.item}>
            <Image alt="icono" className={styles.imgIcon} src={icon3} />

            <span>Porcentaje completado de cupo: {concurrent} porciento.</span>
          </li>
        </ol>
        <div className={styles.containerFooter}>
          <div className={styles.containerSpan}>
            <span className={styles.span}>Ticket de Ingreso</span>
            <h6 className={styles.price}>${price}</h6>
          </div>
          <button className={styles.btnFooter}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M7.99986 15.4284C12.1025 15.4284 15.4284 12.1025 15.4284 7.99986C15.4284 3.89717 12.1025 0.571289 7.99986 0.571289C3.89717 0.571289 0.571289 3.89717 0.571289 7.99986C0.571289 12.1025 3.89717 15.4284 7.99986 15.4284Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 4.57129V11.4284"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.57129 8H11.4284"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h5 className={styles.textBtn}>Premios</h5>
          </button>
        </div>
      </div>
    </div>
  );
};
