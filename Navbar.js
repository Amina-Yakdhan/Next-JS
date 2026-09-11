import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h2>My Portfolio</h2>

      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}