import React from "react";
import Link from "next/link";
import { useAuth, useAuthActions } from "context/AuthContext";
const Layer = () => {
  const user = useAuth();
  const dispatch = useAuthActions();
  return (
    <div className="flex justify-between px-10 h-14 items-center bg-white w-full shadow-2xl">
      <div className="flex gap-x-10">
        {!user.user ? (
          <>
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
          </>
        ) : (
          <div className="flex flex-row gap-x-10">
            <button
              className="bg-red-400 p-1 rounded-md text-slate-600 font-bold items-center"
              onClick={() => dispatch({ type: "SIGNOUT" })}
            >
              signout
            </button>
            <h1 className="text-slate-600">
              welcome <span className="text-blue-300 font-bold">{user.user.name}</span>
            </h1>
          </div>
        )}
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
