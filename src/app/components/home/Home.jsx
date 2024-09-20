"use client";
import styles from "./home.module.css";
import { Navbar } from "@/app/components/Navbar";
import { HomeSection } from "@/app/components/HomeSection";
import { Section2 } from "../Section2";
import { Section3 } from "../Section3";
import { Section4 } from "../Section4";
import { Section5 } from "../Section5";
import { Section6 } from "../Section6";
import { Footer } from "../Footer";
import { FormSection } from "../FormSection";
import { PopUp } from "../popUp";
import { useEffect, useRef } from "react";
import Cookies from "js-cookie";

export function Home({ dataCarrousel }) {
  const containerCookie = useRef(null);

  useEffect(() => {
    const valueCookie = Boolean(Cookies.get("check"));

    if (!valueCookie) {
      setTimeout(() => {
        containerCookie.current.style.display = "initial";
      }, 15000);
    }
  }, []);

  return (
    <div
      onScroll={() => {
        console.log("drag");
      }}
      className={styles.sup}
    >
      <main className={styles.mainContainer}>
        <section id="1" className={`${styles.sectionPage} ${styles.home}`}>
          <article className={`${styles.articlePage} ${styles.articleHome}`}>
            <Navbar />
            <HomeSection />
          </article>
        </section>
        <section id="2" className={`${styles.sectionPage} ${styles.section3}`}>
          <article className={`${styles.articlePage} ${styles.article3}`}>
            <Section3 data={dataCarrousel} />
          </article>
        </section>
        <section id="3" className={`${styles.sectionPage} ${styles.section2}`}>
          <article className={`${styles.articlePage} ${styles.article2}`}>
            <Section2 />
          </article>
        </section>
        <section id="4" className={`${styles.sectionPage} ${styles.section4}`}>
          <article className={styles.articlePage}>
            <Section4 />
          </article>
        </section>
        <section id="5" className={`${styles.sectionPage} ${styles.section5}`}>
          <article className={`${styles.articlePage} ${styles.article5}`}>
            <Section5 />
          </article>
        </section>
        <section id="6" className={`${styles.sectionPage}`}>
          <article className={`${styles.articlePage} ${styles.article5}`}>
            <FormSection />
          </article>
        </section>
        <section id="7" className={`${styles.sectionPage} ${styles.section6}`}>
          <article className={`${styles.articlePage} ${styles.article6}`}>
            <Section6 />
          </article>
        </section>
        <section id="8" className={styles.sectionPage}>
          <article className={`${styles.articlePage} ${styles.article7}`}>
            <Footer />
          </article>
        </section>
      </main>
      <div ref={containerCookie} className={styles.containerCookies}>
        <PopUp />
      </div>
    </div>
  );
}
