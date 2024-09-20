"use cliet";
import { InstagramIcon } from "./../../../public/Instagram";
import { FacebookIcon } from "./../../../public/Facebook";
import { TwitchIcon } from "./../../../public/Twitch";
import { YoutubeIcon } from "./../../../public/Youtube";
import styles from "./redes.module.css";

export const Redes = ({
  row = false,
  hrefI = "https://www.instagram.com/sbs.games",
  hrefF = "https://www.facebook.com/profile.php?id=61555422875813&mibextid=ZbWKwL",
  hrefT = "https://www.twitch.tv/sbsgamess",
  hrefY = "#",
  size = "60px",
  sizeTik = "50px",
  marginTik = "0px",
  tp = "",
  bt = "",
}) => {
  return (
    <div
      className={`${styles.containerRedes} ${
        row ? styles.containerRedesRow : null
      }`}
    >
      <a href={hrefI} target="_bank" className={styles.btnred}>
        <InstagramIcon title="icon instagram" size={size} />
      </a>
      <a href={hrefF} target="_bank" className={styles.btnred}>
        <FacebookIcon title="icon facebook" size={size} />
      </a>
      <a href={hrefT} target="_bank" className={styles.btnred}>
        <TwitchIcon title="icon twitch" size={size} />
      </a>

      <a href={hrefY} target="_bank" className={styles.btnred}>
        <YoutubeIcon title="icon youtube" size={size} />
      </a>
    </div>
  );
};
