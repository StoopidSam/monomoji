const supported_emojis = require("./supported_emojis.json");

function randomize_emojis(numOfCards) {
  let random_emojis = [];

  for (let i = 0; i < numOfCards; i++) {
    let unique = false;
    while (!unique) {
      let emoji =
        supported_emojis[Math.floor(Math.random() * supported_emojis.length)];
      if (random_emojis.includes(emoji)) {
        unique = false;
      } else {
        random_emojis.push(emoji);
        unique = true;
      }
    }
  }

  return random_emojis.map((emoji) => ({
    emoji_char: emoji,
    index: random_emojis.indexOf(emoji),
  }));
}

module.exports = { randomize_emojis };
