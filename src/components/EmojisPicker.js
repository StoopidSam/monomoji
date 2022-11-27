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
            type="text"
            value={emoji.emoji_char}
            key={emoji.index}
            onChange={(e) => handleEmojiChange(e.target.value, emoji.index)}
            maxLength="2"
          />
        ))}
      </div>
    );
  }
}
