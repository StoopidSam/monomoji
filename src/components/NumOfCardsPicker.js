export default function NumOfCardsPicker({ numOfCards, setNumOfCards }) {
  return (
    <div id="NumOfCardsPicker">
      <label htmlFor="numOfCards">
        <p>How many cards would you like? </p>
        <select
          value={numOfCards}
          onChange={(e) => setNumOfCards(e.target.value)}
        >
          <option>7</option>
          <option>13</option>
          <option>31</option>
          <option>57</option>
          <option>91</option>
        </select>
      </label>
      <p>
        This will create a deck of cards with {numOfCards} cards, and{" "}
        {numOfCards} symbols/emojis.
      </p>
    </div>
  );
}
