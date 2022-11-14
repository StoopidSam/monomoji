import Link from "next/link";

export default function Info() {
  return (
    <section>
      <h2>Info</h2>
      <ul>
        <li>
          <p>
            Monomoji is a web app that creates custom card decks for games that
            are similar to "Dobble" or "Spot it!". Select the amount of cards
            you'd like, pick some emojis, and click "Create Deck" to get
            started.
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
