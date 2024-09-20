import React from "react";
import styles from "./dots.module.css";

export const Dots = ({ actualPage = 1 }) => {
  return (
    <div className={styles.containerDots}>
      {actualPage == 1 ? (
        <a className={styles.actualDot} href="#"></a>
      ) : (
        <a className={styles.dot} href="#1"></a>
      )}
      {actualPage == 2 ? (
        <a className={styles.actualDot} href="#"></a>
      ) : (
        <a className={styles.dot} href="#2"></a>
      )}
      {actualPage == 3 ? (
        <a className={styles.actualDot} href="#"></a>
      ) : (
        <a className={styles.dot} href="#3"></a>
      )}
      {actualPage == 4 ? (
        <a className={styles.actualDot} href="#"></a>
      ) : (
        <a className={styles.dot} href="#4"></a>
      )}
      {actualPage == 5 ? (
        <a className={styles.actualDot} href="#"></a>
      ) : (
        <a className={styles.dot} href="#5"></a>
      )}
      {actualPage == 6 ? (
        <a className={styles.actualDot} href="#"></a>
      ) : (
        <a className={styles.dot} href="#6"></a>
      )}
      {actualPage == 7 ? (
        <a className={styles.actualDot} href="#"></a>
      ) : (
        <a className={styles.dot} href="#7"></a>
      )}
    </div>
  );
};
