"use client";
import React from "react";
import androidIcon from "../../../public/IOS.webp";
import Image from "next/image";
import Link from "next/link";
import styles from "./btnsIOS.module.css";

export const ButtonIOS = () => {
  return (
    <Link
      className={styles.link}
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
