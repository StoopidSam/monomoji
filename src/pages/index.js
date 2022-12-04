import Header from "../components/Header";
import Info from "../components/Info";
import DeckGenerator from "../components/DeckGeneratorr";

import Head from "next/head";

export default function Container() {
  return (
    <div id="Container">
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
