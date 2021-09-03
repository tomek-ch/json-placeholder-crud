import PostItem from "../components/PostItem";

export default function Home({ posts, error }) {
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      {posts.map((post) => (
        <PostItem key={post.id} {...post} />
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
