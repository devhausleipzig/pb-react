import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function Blog() {
  return (
    <div className="grid grid-cols-2 gap-3 items-stretch">
      {posts.map((post) => (
        <Link to={`/blog/${post.id}`}>
          <div className="border border-slate-600 h-full hover:shadow-md hover:scale-[1.01] transition">
            <img
              src={post.img}
              alt="Post image"
              className="aspect-[3/2] object-cover"
            />
            <h3 className="font-bold">{post.title}</h3>
            <p className="truncate text-sm">{post.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
