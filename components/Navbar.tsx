import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#6b46c1", color: "white" }}>
      <Link href="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
