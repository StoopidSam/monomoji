export default function Card({ emojis, key }) {
  return (
    <div className="Card" key={key}>
      {emojis.map((emoji) => emoji)}
    </div>
  );
}
