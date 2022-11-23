import { useState } from "react";
import NumOfCardsPicker from "./NumOfCardsPicker";
import EmojisPicker from "./EmojisPicker";
import SubmitButton from "./SubmitButton";
import { generate_cards } from "../generate_cards";

export default function DeckGenerator() {
  const [numOfCards, setNumOfCards] = useState("(select one)");

  const [emojis, setEmojis] = useState([]);

  const [cards, setCards] = useState([]);

  function handleNumOfCardsChange(numOfCards) {
    setNumOfCards(parseInt(numOfCards));

    setEmojis([]);

    let emptyEmojisList = [];

    for (let i = 0; i < numOfCards; i++) {
      emptyEmojisList.push({ emoji_char: "", index: i });
    }

    setEmojis(emptyEmojisList);
  }

  function handleEmojiChange(emoji, index) {
    let newEmojisList = [...emojis];

    newEmojisList[index] = { emoji_char: emoji, index: index };

    setEmojis(newEmojisList);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    let emoji_chars = [];

    for (let emoji of emojis) {
      emoji_chars.push(emoji.emoji_char);
    }

    setCards(generate_cards(2, emoji_chars));
  }

  return (
    <section>
      <h2>Deck Generator</h2>
      <p>This is where you get to generate your own custom card deck.</p>
      <form onSubmit={handleFormSubmit}>
        <NumOfCardsPicker
          handleNumOfCardsChange={handleNumOfCardsChange}
          numOfCards={numOfCards}
        />
        <EmojisPicker
          emojis={emojis}
          handleEmojiChange={handleEmojiChange}
          numOfCards={numOfCards}
        />
        <SubmitButton />
      </form>
    </section>
  );
}
