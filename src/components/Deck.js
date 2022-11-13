import generate_cards from "../generate_cards";

export default function Deck({ numOfCards }) {
  return (
    <div>
      <h2>Deck</h2>
      {generate_cards(3, [
        "🌹",
        "👀",
        "💋",
        "😡",
        "💥",
        "💯",
        "☀️",
        "🍀",
        "✅",
        "🌈",
        "💐",
        "🌺",
        "💦",
        "⭐",
      ]).map((card) => (
        <div className="card">
          <p>{card.map((emoji) => `${emoji}, `)}</p>
        </div>
      ))}
    </div>
  );
}
