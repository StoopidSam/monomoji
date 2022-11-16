import Header from "../components/Header";
import Info from "../components/Info";
import DeckGenerator from "../components/DeckGenerator";

import Head from "next/head";

export default function HomePage() {
  return (
    <div id="container">
      <Head>
        <title>Monomoji</title>
      </Head>
      <Header />
      <main>
        <Info />
        <DeckGenerator />
      </main>
    </div>
  );
}
