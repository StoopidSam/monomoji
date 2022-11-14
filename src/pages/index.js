import Header from "../components/Header";
import Info from "../components/Info";
import DeckGenerator from "../components/DeckGenerator";

import Head from "next/head";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Monomoji</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <main>
        <Info />
        <DeckGenerator />
      </main>
    </div>
  );
}
