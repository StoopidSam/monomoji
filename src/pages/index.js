import { useState } from "react";

function HomePage() {
  function DeckGenerator() {
    const [numOfCards, setNumOfCards] = useState(7);

    function NumOfCardsPicker() {
      return (
        <div>
          <label for="num-of-cards-picker">
            Please select the amount of cards you would like in your deck:
            <span> </span>
          </label>
          <select
            id="num-of-cards-picker"
            value={numOfCards}
            onChange={(e) => setNumOfCards(e.target.value)}
          >
            <option value="7">7</option>
            <option value="13">13</option>
            <option value="31">31</option>
            <option value="57">57</option>
          </select>
        </div>
      );
    }

    function EmojiPicker() {
      return (
        <div>
          <p>Please select {numOfCards} emojis to be included in the deck: </p>
        </div>
      );
    }

    return (
      <div>
        <h2>Deck Generator</h2>
        <NumOfCardsPicker />
        <EmojiPicker />
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome to Monomoji!</h1>
      <DeckGenerator />
    </div>
  );
}

export default HomePage;
