import React from 'react';
//icons
import { AiOutlineHeart } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
import { MdOutlineComment } from "react-icons/md";
import { HiBookmark } from "react-icons/hi";
import {FiBookmark} from "react-icons/fi"
const PostIntraction = ({ item }) => {
  return (
    <div>
      <div className="flex flex-row-reverse gap-x-2">
        {/* comment */}
        <button className="cursor-pointer p-1 flex bg-purple-300 text-purple-500 rounded-md">
          <MdOutlineComment />
        </button>
        {/* like */}
        <button className="cursor-pointer p-1 flex bg-red-300 text-red-500 rounded-md">
          <span>
            {!item.isLiked ? (
              <AiOutlineHeart className="fill-current" />
            ) : (
              <AiTwotoneHeart className="stroke-current" />
            )}
          </span>
        </button>
        {/* bookmark */}
        <button className="cursor-pointer p-1 bg-blue-300 text-blue-500 rounded-md">
          <span>
            {!item.isBookmarked ? (
              <HiBookmark className="fill-current" />
            ) : (
              <FiBookmark className="stroke-current" />
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

export default PostIntraction;