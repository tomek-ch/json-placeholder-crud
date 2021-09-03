import { postsList } from "../styles/components/PostsList.module.scss";
import Link from "next/link";

export default function Home({ posts, error }) {
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className={postsList}>
      {posts.map(({ id, title }) => (
        <Link href={`/posts/${id}`} key={id}>
          {title}
        </Link>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (res.status === 200) {
      return { props: { posts: await res.json() } };
    }
  } catch {}

  return { props: { error: "Server error" } };
}
