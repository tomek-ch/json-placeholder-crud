import { postItem } from "../styles/components/PostItem.module.scss";
import Link from "next/link";
import { useState } from "react";
import { btn } from "../styles/components/BtnPrimary.module.scss";
import { btnDanger } from "../styles/components/BtnDanger.module.scss";

export default function PostItem({ title, id, setPosts }) {
  const [error, setError] = useState("");

  const remove = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        { method: "DELETE" }
      );

      if (res.status !== 200) {
        throw new Error();
      }

      setPosts((prev) => prev.filter((post) => post.id !== id));
    } catch {
      setError("Server error");
    }
  };

  return (
    <>
      <div className={postItem}>
        <Link href={`/posts/${id}`}>{title}</Link>
        <div>
          <button className={btnDanger} onClick={remove}>
            Delete
          </button>
          <Link href={`/posts/${id}/edit`}>
            <a className={btn}>Update</a>
          </Link>
        </div>
      </div>
      <div>{error}</div>
    </>
  );
}
