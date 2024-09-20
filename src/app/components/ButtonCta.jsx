import React from "react";
import styles from "./buttonCta.module.css";

export const ButtonCta = ({
  text = "colocar texto",
  href = "#",
  hover = true,
}) => {
  return (
    <a
      className={`${styles.buttonCta} ${hover ? styles.btnHover : null}`}
      href={href}
    >
      {text}
    </a>
  );
};
