import NumOfCardsPicker from "../components/NumOfCardsPicker";
import EmojiPicker from "../components/EmojiPicker";
import Deck from "../components/Deck";
import generate_cards from "../generate_cards";
import { useState } from "react";

export default function DeckGenerator() {
  const [numOfCards, setNumOfCards] = useState(7);
  const [emojis, setEmojis] = useState([
    "🌹",
    "👀",
    "💋",
    "😡",
    "💥",
    "💯",
    "☀️",
    "🍀",
    "✅",
    "🌈",
    "💐",
    "🌺",
    "💦",
    "⭐",
  ]);
  const [cards, setCards] = useState([]);

  function handleEmojiChange(emojis) {
    setEmojis(emojis);
    setCards(generate_cards(numOfCards, emojis));
  }

  return (
    <div>
      <h2>Deck Generator</h2>
      <NumOfCardsPicker setNumOfCards={setNumOfCards} numOfCards={numOfCards} />
      <EmojiPicker
        numOfCards={numOfCards}
        emojis={emojis}
        setEmojis={setEmojis}
        handleEmojiChange={handleEmojiChange}
      />
      <Deck numOfCards={numOfCards} cards={cards} />
    </div>
  );
}
