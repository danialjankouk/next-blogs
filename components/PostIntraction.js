import { useRouter } from "next/router";
import React from "react";
//icons
import { AiOutlineHeart } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
import { toast } from "react-hot-toast";
import http from "services/httpService";
const PostIntraction = ({ item }) => {
  const router = useRouter();

  const likeHandler = (postId) => {
    http
      .put(`/posts/like/${postId}`)
      .then(({ data }) => {
        router.push({
          pathname: router.pathname,
          query: router.query,
        });
        toast.success(data.message);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      });
  };
  return (
    <div>
      <div className="flex flex-row-reverse gap-x-2">
        {/* like */}
        <button
          onClick={() => likeHandler(item._id)}
          className="cursor-pointer p-1 w-[2rem] items-center flex bg-red-300 text-red-500 rounded-md"
        >
          {item.isLiked ? (
            <AiTwotoneHeart className="fill-current hover:text-white" />
          ) : (
            <AiOutlineHeart className="stroke-current hover:text-white" />
          )}
          <span className="font-bold">{item.likesCount}</span>
        </button>
      </div>
    </div>
  );
};

export default PostIntraction;
