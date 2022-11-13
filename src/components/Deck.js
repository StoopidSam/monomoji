export default function Deck({ numOfCards, cards }) {
  return (
    <div>
      <h2>Deck</h2>
      {cards.map((card) => (
        <div className="card" key={card}>
          <p>{card.map((emoji) => `${emoji}, `)}</p>
        </div>
      ))}
    </div>
  );
}
