import Link from "next/link";

import styles from "./Info.module.css";

export default function Info() {
  return (
    <section id="Info">
      <h2>Info</h2>
      <ul>
        <li>
          <p>
            Monomoji is a web app that creates custom card decks for games that
            are similar to &quot;Dobble&quot; or &quot;Spot it!&quot;. Select
            the amount of cards you&apos;d like, pick some emojis, and click
            &quot;Create Deck&quot; to get started.
          </p>
        </li>
        <li>
          <p>
            To view my source code, visit me on{" "}
            <Link
              href="https://github.com/StoopidSam/monomoji"
              className="link"
            >
              GitHub
            </Link>
            .
          </p>
        </li>
      </ul>
    </section>
  );
}
