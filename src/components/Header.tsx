import { Link, useParams } from "react-router-dom";
import { CustomLink } from "./CustomLink";

export default function Header() {
  const { postId } = useParams();
  return (
    <header className="flex justify-between px-4 py-2 bg-teal-500 text-white">
      <h1>My Blog</h1>
      <p>{postId}</p>
      <nav className="space-x-4">
        <CustomLink to="/" label="Home" />
        <CustomLink to="/about" label="About" />
        <CustomLink to="/blog" label="Blog" />
      </nav>
    </header>
  );
}
