import { useState } from "react";
import PostItem from "../components/PostItem";

export default function Home({ posts, error }) {
  const [currentPosts, setPosts] = useState(posts);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      {currentPosts.map((post) => (
        <PostItem key={post.id} {...post} setPosts={setPosts} />
      ))}
    </>
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
