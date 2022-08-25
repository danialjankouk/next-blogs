import { useRouter } from "next/router";
import React, { useState } from "react";
//icons
import { AiOutlineSortAscending } from "react-icons/ai";
import routerPush from "services/routerPush";

const sortOptions = [
  { label: "most view", id: "most" },
  { label: "most popular", id: "popular" },
  { label: "newest", id: "newest" },
];

const Sort = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [sort, setSort] = useState(router.query.sort || "newest");

  const sortHandler = (id) => {
    setSort(id);
    router.query.sort = id;
    routerPush(router);
  };
  return (
    <div className="bg-blue-50 rounded-xl flex flex-col md:flex-row items-center text-xl md:col-span-9">
      {/* show Handler */}
      <div className="flex md:hidden">
        <button onClick={() => setShow(!show)}>filter</button>
      </div>
      {/* sort */}
      <div className="md:flex gap-x-1 hidden">
        <AiOutlineSortAscending className="mt-1" />
        <h1 className="text-gray-500">Sort:</h1>
      </div>
      <ul
        className={`${
          show ? `hidden` : `flex`
        } flex md:gap-x-5 md:ml-3 w-full h-32 md:h-full md:flex-row flex-col items-center md:justify-start justify-center`}
      >
        {sortOptions.map(({ id, label }) => {
          return (
            <li
              key={id}
              onClick={() => sortHandler(id)}
              className="cursor-pointer hover:text-purple-500 hover:border-b-4 transition-all ease-out border-blue-400"
            >
              {label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sort;
