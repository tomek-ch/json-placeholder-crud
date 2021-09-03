import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>
        <Link href="/">CRUD</Link>
      </h1>
      <nav>
        <Link href="/new">New post</Link>
      </nav>
    </header>
  );
}
