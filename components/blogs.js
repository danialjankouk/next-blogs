import React, { useState , useEffect } from "react";
//links
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsBookmarkHeart } from "react-icons/bs";
import { MdOutlineComment } from "react-icons/md";
import { HiBookmark } from "react-icons/hi";
const Blogs = () => {
  const [like, setLike] = useState(false);
  const [bookMark, setBookMark] = useState(false);
  const [color , setColor] = useState("blue")
    useEffect(() => {
    setColor("red")
},[])
  return (
    <div className={`${color} grid grid-cols-6 gap-8 md:col-span-9 rounded-lg`}>
      {[
        "next.png",
        "nextjs.png",
        "next.png",
        "nextjs.png",
        "next.png",
        "nextjs.png",
      ].map((item, index) => {
        return (
          <div
            key={index}
            className="col-span-6 h-auto md:col-span-3 lg:col-span-2 bg-white rounded-xl p-4"
          >
            {/* cover */}
            <div className="bg-slate-200 aspect-h-9 aspect-w-16 rounded-lg flex justify-center">
              <img
                src={`../images/${item}`}
                alt="logo"
                className="w-full h-full object-center object-cover"
              />
            </div>
            {/*content */}
            <div className="flex flex-col gap-y-3 bg-slate-200 rounded-lg p-2">
              {/* title */}
              <h1 className="mt-2 text-xl">
                {index !== 3 ? "random title" : "what is next ?"}
              </h1>
              {/* caption */}
              <div className="flex justify-between">
                <p className="text-sm">Danial jankouk</p>
                <span className="text-sm">React</span>
              </div>
              {/* detail*/}
              <div className="flex flex-row-reverse justify-between">
                <div className="flex flex-row-reverse gap-x-2">
                  <span className="cursor-pointer">
                    <MdOutlineComment />
                  </span>
                  <span
                    className="cursor-pointer"
                    onClick={() => setLike(!like)}
                  >
                    {like ? (
                      <AiOutlineHeart />
                    ) : (
                      <AiTwotoneHeart className="text-red-600" />
                    )}
                  </span>
                  <span
                    className="cursor-pointer"
                    onClick={() => setBookMark(!bookMark)}
                  >
                    {bookMark ? (
                      <BsBookmarkHeart />
                    ) : (
                      <HiBookmark className="text-red-600" />
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-x-1">
                  <p className="text-xs">reading time: 13m</p>
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
