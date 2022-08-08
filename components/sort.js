import React,{useState} from "react";
//icons
import { AiOutlineSortAscending } from "react-icons/ai";

const Sort = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-blue-200 rounded-xl flex flex-col md:flex-row items-center text-xl md:col-span-9">
      {/* show Handler */}
      <div className="flex md:hidden">
        <button onClick={() => setShow(!show)}>filter</button>
      </div>
      {/* sort */}
      <div className="md:flex gap-x-1 hidden">
        <AiOutlineSortAscending className="mt-1" />
        <h1 className="text-gray-500">Sort:</h1>
      </div>
      <ul className={`${show ? `hidden` : `flex`} flex md:gap-x-5 md:ml-3 w-full h-32 md:h-full md:flex-row flex-col items-center md:justify-start justify-center`}>
        <li className="cursor-pointer hover:text-purple-500 hover:border-b-4 transition-all ease-out border-blue-400">
          Newest
        </li>
        <li className="cursor-pointer hover:text-purple-500 hover:border-b-4 transition-all ease-out border-blue-400">
          Most View
        </li>
        <li className="cursor-pointer hover:text-purple-500 hover:border-b-4 transition-all ease-out border-blue-400">
          Most Popular
        </li>
      </ul>
    </div>
  );
};

export default Sort;
