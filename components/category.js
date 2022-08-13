import React, { useState } from "react";
import Link from "next/link";
//links
import { IoIosArrowUp } from "react-icons/io";
const Category = ({ categoryData }) => {
  const [click, setClick] = useState(false);
  return (
    <div className="bg-blue-200 h-16 items-center rounded-3xl md:flex flex-col justify-between md:row-span-2 md:col-span-3">
      {/* title */}
      <div className="hidden md:flex items-center mt-5 ">
        <h1>Category</h1>
        <IoIosArrowUp
          className={`text-xl cursor-pointer ${
            click ? `rotate-180 transition ease-out` : "rotate-0"
          }`}
          onClick={() => {
            setClick(!click);
          }}
        />
      </div>
      {/* content category */}
      <div
        className={`${
          click ? `hidden` : `block`
        } bg-slate-400 p-2 md:rounded-t-none md:p-0 gap-x-5 justify-center md:w-full flex md:flex-col`}
      >
        <Link href="/blogs">
          <a className="bg-blue-400 md:pl-5">All Posts</a>
        </Link>
        {categoryData.data.map((item) => {
          return (
            <Link href={`/blogs/${item.title}`} key={item._id}>
              <a className="md:hover:bg-blue-400 pb-3 md:mt-2 cursor-pointer md:pl-5">
                {item.title}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
