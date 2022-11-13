export default function NumOfCardsPicker({ setNumOfCards, numOfCards }) {
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
        <option value="133">133</option>
      </select>
    </div>
  );
}
