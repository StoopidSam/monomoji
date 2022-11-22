export default function EmojisPicker({
  emojis,
  handleEmojiChange,
  numOfCards,
}) {
  if (numOfCards === "(select one)") {
    return;
  } else {
    return (
      <div id="EmojisPicker">
        <p>Which emojis would you like?</p>
        {emojis.map((emoji) => (
          <input
            key={emoji}
            type="text"
            maxLength="1"
            value={emojis[emojis.indexOf(emoji)]}
            onChange={(e) => handleEmojiChange(e.target.value)}
          />
        ))}
      </div>
    );
  }
}
