import React from "react";
import Link from "next/link";
const Layer = () => {
  return (
    <div className="flex justify-between px-10 h-14 items-center bg-white w-full shadow-2xl">
      <div className="flex gap-x-10">
        <Link href="/signup">
          <a>
            <h1 className="hover:text-purple-500 hover:border-b-4 transition-all ease-out border-blue-400">
              signUp
            </h1>
          </a>
        </Link>
        <Link href="/signin">
          <a>
            <h1 className="hover:text-purple-500 hover:border-b-4 transition-all ease-out border-blue-400">
              signIn
            </h1>
          </a>
        </Link>
      </div>
      <div className="flex gap-x-10">
        <Link href="/blogs">
          <a>
            <h1 className="hover:text-purple-500 hover:border-b-4 transition-all ease-out border-blue-400">
              Blogs
            </h1>
          </a>
        </Link>
        <Link href="/">
          <a>
            <h1 className="hover:text-purple-500 hover:border-b-4 transition-all ease-out border-blue-400">
              Home
            </h1>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Layer;
