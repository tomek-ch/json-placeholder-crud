export default function Post({ post, error }) {
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export async function getServerSideProps({ params: { postId } }) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    if (res.status === 200) {
      return { props: { post: await res.json() } };
    }

    if (res.status === 404) {
      return { props: { error: "Post not found" } };
    }
  } catch {
    return { props: { error: "Server error" } };
  }
}
