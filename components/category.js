import React, { useState } from "react";
//links
import { IoIosArrowUp } from "react-icons/io";
const Category = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="md:bg-blue-200 h-16 items-center rounded-3xl md:flex flex-col justify-between md:row-span-2 md:col-span-3">
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
        } bg-slate-400 p-2 rounded-3xl md:rounded-t-none md:p-0 gap-x-5 justify-center md:w-full md:rounded-b-3xl flex md:flex-col`}
      >
        <h1 className="md:hover:bg-blue-400 md:mt-2 cursor-pointer md:pl-5">
          JavaScript
        </h1>
        <h1 className="md:hover:bg-blue-400 cursor-pointer md:pl-5">React</h1>
        <h1 className="md:hover:bg-blue-400 cursor-pointer md:pl-5">Vue.js</h1>
        <h1 className="md:hover:bg-blue-400 cursor-pointer md:pl-5">Social</h1>
        <h1 className="md:hover:bg-blue-400 md:pb-2 cursor-pointer md:pl-5 md:rounded-b-3xl">
          Next.js
        </h1>
      </div>
    </div>
  );
};

export default Category;
