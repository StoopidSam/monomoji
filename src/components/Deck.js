import Card from "./Card";

export default function Deck({ cards }) {
  return (
    <div id="Deck">
      {cards.map((card) => (
        <Card emojis={card} key={card.index} />
      ))}
    </div>
  );
}
