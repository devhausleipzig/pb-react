import React, { useState } from "react";
import type { Comment } from "../routes/Post";

type CommentWithoutId = Omit<Comment, "id">;

interface Props {
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  error: string;
}

const initialValues = {
  name: "",
  message: "",
};

export default function CommentForm({ setComments, setError, error }: Props) {
  const [form, setForm] = useState<CommentWithoutId>(initialValues);
  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    if (form.name && form.message) {
      setComments((prev) => [...prev, { ...form, id: prev.length + 1 }]);
      setError("");
      setForm(initialValues);
    } else {
      setError("Name or message is missing");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-1/4 space-y-1">
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(evt) =>
          setForm((prev) => ({ ...prev, name: evt.target.value }))
        }
      />
      <textarea
        placeholder="Message"
        value={form.message}
        onChange={(evt) =>
          setForm((prev) => ({ ...prev, message: evt.target.value }))
        }
      />
      {error && <p className="text-red-400">{error}</p>}
      <button className="bg-slate-400 rounded py-1 px-2" type="submit">
        Post Comment
      </button>
    </form>
  );
}
