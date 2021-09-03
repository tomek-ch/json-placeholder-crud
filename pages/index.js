import { postsList } from "../styles/PostsList.module.scss";

export default function Home({ posts, error }) {
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <ul className={postsList}>
      {posts.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
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
