import { postItem } from "../styles/components/PostItem.module.scss";
import Link from "next/link";

export default function PostItem({ title, id }) {
  return (
    <div className={postItem}>
      <Link href={`/posts/${id}`}>{title}</Link>
      <div>
        <button>Delete</button>
        <Link href={`/posts/${id}/update`}>Update</Link>
      </div>
    </div>
  );
}
