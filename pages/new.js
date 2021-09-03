import { useState } from "react";
import TextBox from "../components/TextBox";
import { input } from "../styles/components/Input.module.scss";
import { form } from "../styles/components/Form.module.scss";
import { btn } from "../styles/components/BtnPrimary.module.scss";

export default function New() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const error = !title
    ? "Post needs a title"
    : !body
    ? "Post needs a body"
    : "";

  return (
    <form className={form}>
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
        Add post
      </button>
    </form>
  );
}
