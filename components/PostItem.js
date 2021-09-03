import { postItem } from "../styles/components/PostItem.module.scss";
import Link from "next/link";

export default function PostItem({ title, id }) {
  return (
    <div className={postItem}>
      <Link href={`/posts/${id}`}>{title}</Link>
    </div>
  );
}
