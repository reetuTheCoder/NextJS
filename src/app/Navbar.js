// src/app/components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link href="/">MyApp</Link>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/getting-started">Getting Started</Link>

        </div>
      </div>
    </nav>
  );
}
