import NumOfCardsPicker from "../components/NumOfCardsPicker";
import EmojiPicker from "../components/EmojiPicker";
import Deck from "../components/Deck";
import { useState } from "react";

export default function DeckGenerator() {
  const [numOfCards, setNumOfCards] = useState(7);

  return (
    <div>
      <h2>Deck Generator</h2>
      <NumOfCardsPicker setNumOfCards={setNumOfCards} numOfCards={numOfCards} />
      <EmojiPicker numOfCards={numOfCards} />
      <Deck numOfCards={numOfCards} />
    </div>
  );
}
