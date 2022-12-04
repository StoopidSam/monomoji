import Card from "../Card";

import styles from "./Deck.module.css";

export default function Deck({ cards }) {
  return (
    <div id="Deck" className={styles.Deck}>
      {cards.map((card) => (
        <Card emojis={card} key={card.index} />
      ))}
    </div>
  );
}
