import DeckGenerator from "../components/DeckGenerator";
import Head from "next/head";

function HomePage() {
  return (
    <div>
      <Head>
        <title>Monomoji</title>
      </Head>
      <main>
        <h1>Welcome to Monomoji!</h1>
        <DeckGenerator className="DeckGenerator" />
      </main>
    </div>
  );
}

export default HomePage;
