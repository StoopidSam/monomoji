export default function NumOfCardsPicker({
  numOfCards,
  handleNumOfCardsChange,
}) {
  return (
    <div id="NumOfCardsPicker">
      <label>
        <p>How many cards would you like? </p>
        <select
          value={numOfCards}
          onChange={(e) => handleNumOfCardsChange(e.target.value)}
        >
          <option disabled hidden>
            (select one)
          </option>
          <option>7</option>
          <option>13</option>
          <option>31</option>
          <option>57</option>
          <option>133</option>
        </select>
      </label>
      <p>
        This will create a deck of cards with {numOfCards} cards, and{" "}
        {numOfCards} symbols/emojis.
      </p>
    </div>
  );
}
