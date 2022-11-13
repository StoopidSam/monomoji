export default function EmojiPicker({
  numOfCards,
  emojis,
  setEmojis,
  handleEmojiChange,
}) {
  return (
    <div>
      <p>Please select {numOfCards} emojis:</p>
      {emojis.map((emoji) => (
        <input
          type="text"
          value={emoji}
          key={emoji}
          onChange={(e) => handleEmojiChange(e.target.value)}
        ></input>
      ))}
    </div>
  );
}
