"use client";
import React from "react";
import androidIcon from "../../../public/googleplay.webp";
import Image from "next/image";
import Link from "next/link";
import styles from "./btnsIOS.module.css";

export const ButtonAndroid = () => {
  return (
    <Link
      className={`${styles.link} ${styles.googleplay}`}
      target="_blank"
      href={"https://www.google.com/?hl=es"}
    >
      <Image
        alt="button"
        className={styles.btnsIOS}
        src={androidIcon}
        priority
      />
    </Link>
  );
};
