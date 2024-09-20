import { Home } from "../app/components/home/Home";
import "./styles/globals.css";
import favicon from "../../public/favicon.ico";
import Head from "next/head";

function Page({ tournaments }) {
  return (
    <>
      <Head>
        <title>SBS-GAMES</title>
        <meta name="home" content="Participa en sorprendentes premios" />
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>
      <Home dataCarrousel={tournaments} />
    </>
  );
}

export default Page;

export async function getStaticProps() {
  const csv = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRp0saMuUlLeu6pAHapv6-l9q7WTQNkMqPFieF8PGnQhpwDo2ZO0ld5ofAI1OhRHyPXBCqbebV0tP5J/pub?gid=1838881071&output=csv"
  );

  const data = await csv.text();

  let tournaments = data
    .split("\n")
    .slice(1)
    .map((row) => {
      const [name, image, date, location, concurrent, price] = row.split(",");
      return { name, image, location, price, concurrent, date };
    });

  // if (tournaments.length == 0) {
  //   return {};
  // } else {
  //   Verificar si el número de elementos en tournaments es menor a seis
  //   while (tournaments.length < 6) {
  //     Agregar los primeros elementos al final del array
  //     tournaments = tournaments.concat(
  //       tournaments.slice(0, 6 - tournaments.length)
  //     );
  //   }
  return {
    props: {
      tournaments,
      revalidate: false,
    },
  };
}
