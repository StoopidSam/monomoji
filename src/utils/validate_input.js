const supported_emojis = require("./supported_emojis.json");

function validate_input(numOfCards, emojis) {
  // Check that each emoji field is filled out
  for (let emoji of emojis) {
    if (emoji.emoji_char === "") {
      return "Error: each emoji field must be filled out";
    }
  }

  // Check that each emoji is supported
  for (let emoji of emojis) {
    if (!supported_emojis.includes(emoji.emoji_char)) {
      return (
        "Error: each symbol must be an emoji. The symbol " +
        emoji.emoji_char +
        " is not supported"
      );
    }
  }

  // Check whether each emoji is unique
  function has_duplicates(list) {
    return new Set(list).size !== list.length;
  }
  let emoji_chars = [];
  for (let emoji of emojis) {
    emoji_chars.push(emoji.emoji_char);
  }
  if (has_duplicates(emoji_chars)) {
    return "Error: each emoji must be unique";
  }

  // Check that the number of cards is either 7, 13, 31, 57 or 133
  if (
    numOfCards !== 7 &&
    numOfCards !== 13 &&
    numOfCards !== 31 &&
    numOfCards !== 57 &&
    numOfCards !== 133
  ) {
    return "Error: invalid number of cards";
  }

  // Check whether the number of cards is equal to the number of emojis
  if (numOfCards !== emojis.length) {
    return "Error: the number of cards must be equal to the number of emojis";
  }

  return true;
}

module.exports = { validate_input };
