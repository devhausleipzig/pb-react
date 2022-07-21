import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { posts } from "../data/posts";

export default function Post() {
  const { postId } = useParams();
  const post = posts.find((post) => post.id === parseInt(postId!));

  if (!post) {
    return <p>No post for id {postId} found</p>;
  }

  const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done
  
A table:

| a | b |
| - | - |
`;
  console.log(post.body);

  return (
    <div className="prose">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <ReactMarkdown children={post.body} remarkPlugins={[remarkGfm]} />
    </div>
  );
}
