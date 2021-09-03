import { useState } from "react";
import PostForm from "../../../components/PostForm";
import { useRouter } from "next/router";

export default function Edit({ post, error }) {
  const [updateError, setError] = useState("");
  const router = useRouter();

  const update = async (data) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (!res.ok) {
        throw new Error();
      }

      router.push(`/posts/${post.id}`);
    } catch {
      setError("Server error");
    }
  };

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <PostForm initialData={post} label="Update post" handleSubmit={update} />
  );
}

export async function getServerSideProps({ params: { postId } }) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    if (res.ok) {
      return { props: { post: await res.json() } };
    }

    if (res.status === 404) {
      return { props: { error: "Post not found" } };
    }
  } catch {
    return { props: { error: "Server error" } };
  }
}
