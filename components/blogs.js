import React, { useState, useEffect } from "react";
import axios from "axios";
//links
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsBookmarkHeart, BsCurrencyYen } from "react-icons/bs";
import { MdOutlineComment } from "react-icons/md";
import { HiBookmark } from "react-icons/hi";
const Blogs = ({ blogsData }) => {
  const [like, setLike] = useState(false);
  const [bookMark, setBookMark] = useState(false);
  return (
    <div className={`grid grid-cols-6 gap-8 md:col-span-9 rounded-lg`}>
      {blogsData.data.docs.map((item, index) => {
        return (
          <div
            key={index}
            className="col-span-6 h-auto md:col-span-3 lg:col-span-2 bg-white rounded-xl p-4"
          >
            {/* cover */}
            <div className="bg-slate-200 aspect-h-9 aspect-w-16 rounded-lg flex justify-center">
              <img
                src={`${item.coverImage}`}
                alt="logo"
                className="w-full h-full object-center object-cover"
              />
            </div>
            {/*content */}
            <div className="flex flex-col gap-y-3 bg-slate-200 rounded-lg p-2">
              {/* title */}
              <h1 className="mt-2 text-xl">{item.title}</h1>
              {/* caption */}
              <div className="flex justify-between">
                <p className="text-sm">{item.author.name}</p>
                <span className="text-sm">
                  {item.category !== null ? (
                    item.category.englishTitle
                  ) : (
                    <p>unknow</p>
                  )}
                </span>
              </div>
              {/* detail*/}
              <div className="flex flex-row-reverse justify-between">
                <div className="flex flex-row-reverse gap-x-2">
                  {/* comment */}
                  <button className="cursor-pointer flex bg-purple-300 rounded-md">
                    <MdOutlineComment />
                    <span>{item.commentsCount}</span>
                  </button>
                  {/* like */}
                  <button className="cursor-pointer flex bg-red-300 rounded-md">
                    <span onClick={() => setLike(!like)}>
                      {like ? (
                        <AiOutlineHeart />
                      ) : (
                        <AiTwotoneHeart className="text-red-600" />
                      )}
                    </span>
                    {item.likesCount}
                  </button>
                  {/* bookmark */}
                  <button className="cursor-pointer bg-blue-300 rounded-md">
                    <span onClick={() => setBookMark(!bookMark)}>
                      {bookMark ? (
                        <BsBookmarkHeart />
                      ) : (
                        <HiBookmark className="text-blue-600" />
                      )}
                    </span>
                  </button>
                </div>
                <div className="flex items-center gap-x-1">
                  <p className="text-xs">reading time: {item.readingTime}m</p>
                  <span>
                    <AiOutlineClockCircle className="mt-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
