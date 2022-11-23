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
      emptyEmojisList.push({ emoji_char: "", index: i });
    }

    setEmojis(emptyEmojisList);
  }

  // Define a function that updates a single emoji in the emojis list
  function handleEmojiChange(emoji, index) {
    let newEmojisList = [...emojis];

    newEmojisList[index] = { emoji_char: emoji, index: index };

    setEmojis(newEmojisList);
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
