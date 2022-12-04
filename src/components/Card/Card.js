import styles from "./Card.module.css";

export default function Card({ emojis, key }) {
  return (
    <div className={styles.Card} key={key}>
      {emojis.map((emoji) => emoji)}
    </div>
  );
}
