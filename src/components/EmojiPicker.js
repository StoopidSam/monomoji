import { useState } from "react";

export default function EmojiPicker({ numOfCards }) {
  let emojis = [];

  for (let i = 0; i < numOfCards; i++) {
    emojis.push("");
  }

  return (
    <div>
      <p>Please select {numOfCards} emojis:</p>
      {emojis.map((numOfCards) => (
        <input type="text"></input>
      ))}
    </div>
  );
}
