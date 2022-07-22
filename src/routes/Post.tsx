import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";
import { posts } from "../data/posts";

export type Comment = {
  id: number;
  name: string;
  message: string;
};

export default function Post() {
  const { postId } = useParams();
  const post = posts.find((post) => post.id === parseInt(postId!));

  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedComments = localStorage.getItem(postId!);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  useEffect(() => {
    if (comments.length) {
      localStorage.setItem(postId!, JSON.stringify(comments));
    }
  }, [comments]);

  if (!post) {
    return <p>No post for id {postId} found</p>;
  }

  return (
    <div className="divide-y space-y-3">
      <div className="prose">
        <h2 className="text-xl font-bold">{post.title}</h2>
        <ReactMarkdown children={post.body} remarkPlugins={[remarkGfm]} />
      </div>

      <CommentForm
        setComments={setComments}
        setError={setError}
        error={error}
      />

      <CommentList comments={comments} />
    </div>
  );
}
