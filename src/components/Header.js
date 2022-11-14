import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div id="header-content">
        <img src="./logo_100px.png" alt="Monomoji Logo" id="logo" />
        <h1>MONOMOJI</h1>
        <Link href="https://github.com/StoopidSam/monomoji" id="github-logo">
          <img src="./github_mark.png"></img>
        </Link>
      </div>
    </header>
  );
}