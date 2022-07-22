import { Comment } from "../routes/Post";

interface Props {
  comments: Comment[];
}

export default function CommentList({ comments }: Props) {
  return (
    <div className="flex flex-col space-y-2">
      {comments.map((comment) => (
        <div key={comment.id} className="bg-slate-200 p-2">
          <h4>{comment.name}</h4>
          <p>{comment.message}</p>
        </div>
      ))}
    </div>
  );
}
