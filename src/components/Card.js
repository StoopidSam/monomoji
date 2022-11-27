export default function Card({ emojis }) {
  return <div className="Card">{emojis.map((emoji) => emoji)}</div>;
}
