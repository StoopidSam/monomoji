export default function Deck({ cards }) {
  return (
    <div>
      {cards.map((card) => (
        <p>{card.map((symbol) => symbol)}</p>
      ))}
    </div>
  );
}
