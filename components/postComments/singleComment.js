import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
const SingleComment = ({ comment }) => {
  const [onReply, setOnReply] = useState(false);
  return (
    <div className="border max-w-screen-lg mx-auto pb-5 border-gray-500 rounded p-2 md:p-2">
      <div className="flex">
        <AiOutlineUser className="h-10 w-10" />
        <div className="flex flex-col justify-between">
          <span>{comment.writer.name}</span>
          <span>{comment.createdAt.slice(0, 10)}</span>
        </div>
      </div>
      <span>{comment.content}</span>
      <button onClick={() => setOnReply(!onReply)}>
        {!onReply ? "response to" : "leave it"}
      </button>
    </div>
  );
};

export default SingleComment;
