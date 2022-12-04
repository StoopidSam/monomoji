import styles from "./Header.module.css";

import Image from "next/image";

export default function Header() {
  return (
    <header id="Header" className={styles.Header}>
      <div className={styles.HeaderContent}>
        <Image
          src="/logo_100px.png"
          alt="Monomoji Logo"
          className={styles.Logo}
          width={100}
          height={100}
        />
        <h1>MONOMOJI</h1>
      </div>
    </header>
  );
}
