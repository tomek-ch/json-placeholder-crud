import { useState } from "react";
import TextBox from "../components/TextBox";

export default function New() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const error = !title
    ? "Post needs a title"
    : !body
    ? "Post needs a body"
    : "";

  return (
    <form>
      <input
        value={title}
        onChange={({ target: { value } }) => setTitle(value)}
      />
      <TextBox
        value={body}
        onChange={({ target: { value } }) => setBody(value)}
      />
      <button disabled={!title || !body} title={error}>
        Add post
      </button>
    </form>
  );
}
