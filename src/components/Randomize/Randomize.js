import styles from "./Randomize.module.css";

export default function Randomize({ randomizeEmojis }) {
  return (
    <button
      id="Randomize"
      className={styles.Randomize}
      type="button"
      onClick={randomizeEmojis}
    >
      RANDOMIZE 🔀
    </button>
  );
}
