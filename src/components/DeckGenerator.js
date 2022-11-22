import { useState } from "react";
import NumOfCardsPicker from "./NumOfCardsPicker";
import EmojisPicker from "./EmojisPicker";

export default function DeckGenerator() {
  const [numOfCards, setNumOfCards] = useState("(select one)");

  const [emojis, setEmojis] = useState([]);

  function handleNumOfCardsChange(numOfCards) {
    setNumOfCards(parseInt(numOfCards));

    setEmojis([]);

    let emptyEmojisList = [];

    for (let i = 0; i < numOfCards; i++) {
      emptyEmojisList.push(i);
    }

    setEmojis(emptyEmojisList);
  }

  function handleEmojiChange(emoji) {
    setEmojis();
  }

  return (
    <section>
      <h2>Deck Generator</h2>
      <p>
        This is the section where you get to generate your custom card deck.
      </p>
      <form>
        <NumOfCardsPicker
          handleNumOfCardsChange={handleNumOfCardsChange}
          numOfCards={numOfCards}
        />
        <EmojisPicker
          emojis={emojis}
          handleEmojiChange={handleEmojiChange}
          numOfCards={numOfCards}
        />
      </form>
    </section>
  );
}
