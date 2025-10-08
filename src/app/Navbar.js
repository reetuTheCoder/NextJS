import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link href="/">MyApp</Link>

        <div style={{ display: "flex", gap: "20px", padding: "10px" }}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/getting-started">Getting Started</Link>
          <Link href="/api">API Reference</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
