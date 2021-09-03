import { useState } from "react";
import TextBox from "./TextBox";
import { input } from "../styles/components/Input.module.scss";
import { form } from "../styles/components/Form.module.scss";
import { btn } from "../styles/components/BtnPrimary.module.scss";

export default function PostForm({ initialData, handleSubmit, label }) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [body, setBody] = useState(initialData?.body || "");
  const error = !title
    ? "Post needs a title"
    : !body
    ? "Post needs a body"
    : "";

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ title, body });
  };

  return (
    <form className={form} onSubmit={onSubmit}>
      <label>
        Title:
        <input
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
          className={input}
          autoFocus
        />
      </label>
      <label>
        Body:
        <TextBox
          value={body}
          onChange={({ target: { value } }) => setBody(value)}
          className={input}
        />
      </label>
      <button disabled={!title || !body} title={error} className={btn}>
        {label}
      </button>
    </form>
  );
}
