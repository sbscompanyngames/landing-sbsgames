"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import logo from "../../../public/logo2.webp";
import menu from "../../../public/menu.webp";
import { Plus_Jakarta_Sans } from "next/font/google";
import miniNav from "../../../public/sbschiconav.webp";
import home from "../../../public/homeNav.webp";
import idea from "../../../public/ideaNav.webp";
import trofeo from "../../../public/trofeoNav.webp";
import tickets from "../../../public/ticketsNav.webp";

const plus = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const Navbar = ({ homeSelected = true }) => {
  const [toggle, setToggle] = useState(false);
  const [showNav, setShowNav] = useState(true);

  function handleLink() {
    setTimeout(() => {
      setToggle((prev) => !prev);
    }, 200);
  }

  function handleLinkScroll() {
    setToggle(false);
  }

  return (
    <div
      className={`${homeSelected ? styles.background : styles.backgroundNone} ${
        showNav ? styles.show : styles.notShow
      }`}
    >
      <nav className={`${styles.navContainer} ${plus.className}`}>
        <div className={styles.imgContainer}>
          <a href={"/"}>
            <Image
              priority={true}
              alt="logo"
              className={styles.logo}
              src={logo}
            />
          </a>
          <a href={"/"}>
            <Image
              alt="logo"
              className={styles.iconMiniNav}
              priority={true}
              src={miniNav}
            />
          </a>
        </div>
        <div className={styles.containerButtons}>
          <ol className={styles.containerli}>
            <li>
              <a
                href={homeSelected ? "#1" : "/"}
                data-notranslate
                className={`${styles.item} ${
                  homeSelected ? styles.itemHome : null
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a href={homeSelected ? "#3" : "/#3"} className={styles.item}>
                Torneos Virtuales
              </a>
            </li>
            <li>
              <a href={homeSelected ? "#4" : "/#4"} className={styles.item}>
                Tickets
              </a>
            </li>
            <li>
              <a href={homeSelected ? "#5" : "/#5"} className={styles.item}>
                Tutorial
              </a>
            </li>
          </ol>
          <a href="#" className={styles.btnIngreso}>
            Ingreso
          </a>
          <button
            onClick={() => {
              setToggle((prev) => !prev);
            }}
            className={styles.toggleBtn}
          >
            <Image alt="menu" src={menu} />
          </button>
        </div>
      </nav>
      <div
        className={`${styles.containerToggle} ${
          toggle ? null : styles.animation
        }`}
      >
        <div className={styles.contNav}>
          <div
            className={`${styles.containerButtons} ${styles.containerButtons2}`}
          >
            <ol className={`${styles.containerli} ${styles.containerli2}`}>
              <li onClick={handleLink} className={styles.anchor}>
                <a
                  href={homeSelected ? "#1" : "/"}
                  className={`${styles.item} ${styles.itemHome2} ${styles.item2}`}
                >
                  <Image
                    className={styles.iconToggle}
                    src={home}
                    alt="icono home"
                  />
                  Home
                </a>
              </li>

              <li onClick={handleLink} className={styles.anchor}>
                <a
                  href={homeSelected ? "#3" : "/#3"}
                  className={`${styles.item}  ${styles.item2}`}
                >
                  <Image
                    className={styles.iconToggle}
                    src={trofeo}
                    alt="icono torneos"
                  />
                  Torneos Virtuales
                </a>
              </li>

              <li onClick={handleLink} className={styles.anchor}>
                <a
                  href={homeSelected ? "#4" : "/#4"}
                  className={`${styles.item} ${styles.item2}`}
                >
                  <Image
                    className={styles.iconToggle}
                    src={tickets}
                    alt="icono tickets"
                  />
                  Tickets
                </a>
              </li>

              <li onClick={handleLink} className={styles.anchor}>
                <a
                  href={homeSelected ? "#5" : "/#5"}
                  className={`${styles.item} ${styles.item2}`}
                >
                  <Image
                    className={styles.iconToggle}
                    src={idea}
                    alt="icono idea"
                  />
                  Tutorial
                </a>
              </li>
            </ol>
            <a
              href="#"
              className={`${styles.btnIngreso} ${styles.btnIngreso2}`}
            >
              Ingreso
            </a>
          </div>
          <div
            onScroll={handleLinkScroll}
            onTouchMove={handleLinkScroll}
            onClick={handleLinkScroll}
            className={styles.space}
          ></div>
        </div>
      </div>
    </div>
  );
};
