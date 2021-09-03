import Link from "next/link";
import { header } from "../../styles/Header.module.scss";

export default function Header() {
  return (
    <header className={header}>
      <h1>
        <Link href="/">CRUD</Link>
      </h1>
      <nav>
        <Link href="/new">New post</Link>
      </nav>
    </header>
  );
}
