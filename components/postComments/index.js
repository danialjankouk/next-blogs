import React, { useState } from "react";
import SingleComment from "./singleComment";

const PostComments = ({ post }) => {
  const [comment, setComment] = useState("");
  return (
    <div className="max-w-screen-lg mx-auto pb-5">
      {post.comments.map((comment, index) => {
        return (
          !comment.responseTo &&
          comment.status === 2 && (
            <React.Fragment key={comment._id}>
              <SingleComment comment={comment} />
            </React.Fragment>
          )
        );
      })}
      <form>
        <h2>New Comment</h2>
        <textarea
          className="focus:ring-slate-400 p-4 rounded my-4 w-full 
          border-none ring-2 ring-slate-300 shadow-sm focus:outline-none focus:ring-2"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="type your comment ..."
        />
        <button className="p-1 bg-blue-300 rounded-md">Send</button>
      </form>
    </div>
  );
};

export default PostComments;
