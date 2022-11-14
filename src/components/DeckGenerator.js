import { useState } from "react";
import NumOfCardsPicker from "./NumOfCardsPicker";

export default function DeckGenerator() {
  const [numOfCards, setNumOfCards] = useState("7");
  return (
    <section>
      <h2>Deck Generator</h2>
      <p>
        This is the section where you get to generate your custom card deck.
      </p>
      <form>
        <NumOfCardsPicker
          setNumOfCards={setNumOfCards}
          numOfCards={numOfCards}
        />
      </form>
    </section>
  );
}
