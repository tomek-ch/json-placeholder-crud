import { useRouter } from "next/router";
import { useState } from "react";
import PostForm from "../components/PostForm";

export default function New({ post, error }) {
  const [postError, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (post) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (res.status.ok) {
        throw new Error();
      }
      router.replace("/posts/100");
    } catch (e) {
      console.log(e);
      setError("Server error");
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <PostForm label="Add post" handleSubmit={() => handleSubmit(post)} />
      <div>{postError}</div>
    </>
  );
}
