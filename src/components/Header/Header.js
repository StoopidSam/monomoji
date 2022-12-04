import styles from "./Header.module.css";

export default function Header() {
  return (
    <header id="Header" className={styles.Header}>
      <div className={styles.HeaderContent}>
        <img
          src="./logo_100px.png"
          alt="Monomoji Logo"
          className={styles.Logo}
        />
        <h1>MONOMOJI</h1>
      </div>
    </header>
  );
}
