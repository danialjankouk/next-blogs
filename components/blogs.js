import React, { useState, useEffect } from "react";
import PostIntraction from "./PostIntraction";
//links
import { AiOutlineClockCircle } from "react-icons/ai";
import Link from "next/link";
const Blogs = ({ blogsData }) => {
  return (
    <div className={`grid grid-cols-6 gap-8 md:col-span-9 rounded-lg`}>
      {blogsData.data.docs.map((item) => {
        return (
          <div
            key={item._id}
            className="col-span-6 max-h-[350px] md:col-span-3 lg:col-span-2 bg-white rounded-xl p-4"
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
              <Link href={`/posts/${item.hashId}/${item.slug}`}>
                <a>
                  <h1 className="mt-2 text-xl">{item.title}</h1>
                </a>
              </Link>
              {/* caption */}
              <div className="flex justify-between">
                <p className="text-sm">{item.author.name}</p>
                <Link
                  href={`/blogs/${
                    item.category !== null ? item.category.englishTitle : ""
                  }`}
                >
                  <a className="text-sm bg-blue-300 p-1 rounded-xl">
                    {item.category !== null ? (
                      item.category.englishTitle
                    ) : (
                      <p>unknow</p>
                    )}
                  </a>
                </Link>
              </div>
              {/* detail*/}
              <div className="flex flex-row-reverse justify-between">
                <div className="flex flex-row-reverse gap-x-2">
                  <PostIntraction item={item} />
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
