import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import queryString from "query-string";
import { CopyToClipboard } from "react-copy-to-clipboard";
//components
import PostIntraction from "components/PostIntraction";
//icnon
import { FiShare2 } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { ImLinkedin2 } from "react-icons/im";
import { ImTelegram } from "react-icons/im";
import { MdContentCopy } from "react-icons/md";
import Layer from "components/Layer";
const PostSlug = ({ blogsData ,post}) => {
  const [copy, setCopy] = useState(false);
  const copyHandler = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };
  return (
    <div>
      <Layer />
      <div className="bg-gray-200 container mx-auto h-auto pt-2">
        {blogsData.data.docs.map((item) => {
          return (
            <div
              key={item._id}
              className="prose-h1:text-slate-500 max-w-screen-lg mx-auto prose-headings:font-bold prose-h2:text-slate-600 prose-headings:text-xl prose-p:text-lg"
            >
              <header className="flex max-w-screen-lg mx-auto justify-between pr-10">
                <div>
                  <div className="flex gap-x-2">
                    <h1 className="font-bold">{item.author.name}</h1>
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
                  <span>{item.author.biography}</span>
                  <div className="flex gap-x-2">
                    <span>{item.createdAt.slice(0, 10)}</span>.
                    <span>readingTime: {item.readingTime}</span>
                  </div>
                </div>
                <div className="gap-x-5 flex h-7 w-7">
                  <button className="bg-purple-300 rounded-lg p-1">
                    <FiShare2 />
                  </button>
                  <button className="bg-blue-300 rounded-lg p-1">
                    <BsBookmark />
                  </button>
                </div>
              </header>
              <main className="max-w-screen-lg mx-auto">
                <h1>{item.title}</h1>
                <div>
                  <h2>test title 1</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <div className="flex items-center justify-center">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="object-center rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <h2>test title 2</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </main>
              <section className="mx-auto">
                {/* icons*/}
                <PostIntraction item={item} className="flex justify-between" />
                <div className="flex text-xl mt-5 flex-row-reverse justify-between">
                  {/* copy */}
                  <div>
                    {copy && <span className="text-gray-500">copied</span>}
                    <CopyToClipboard
                      text={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts/${item.hashId}/${item.slug}`}
                      onCopy={copyHandler}
                    >
                      <div className="flex mb-5 cursor-pointer transition-all text-white hover:text-slate-600 hover:bg-gray-400 items-center gap-x-2 bg-gray-500 p-1 rounded-lg">
                        <span>copy Link</span>
                        <MdContentCopy />
                      </div>
                    </CopyToClipboard>
                  </div>
                  {/* share */}
                  <div className="flex text-2xl gap-x-2 md:gap-x-5">
                    <h1>Share :</h1>
                    <a
                      className="cursor-pointer"
                      target="_blank"
                      href={`https://www.twitter.com/share?text=${item.title}&?url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts/${item.hashId}/${item.slug}`}
                    >
                      <FiTwitter className="text-gray-500 hover:text-blue-500" />
                    </a>
                    <a
                      className="cursor-pointer"
                      target="_blank"
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts/${item.hashId}/${item.slug}`}
                    >
                      <ImLinkedin2 className="text-gray-500 hover:text-blue-800" />
                    </a>
                    <a
                      className="cursor-pointer"
                      target="_blank"
                      href={`https://www.telegram.me/share/url?url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts/${item.hashId}/${item.slug}&text=${item.title}`}
                    >
                      <ImTelegram className="text-gray-500 hover:text-blue-700" />
                    </a>
                  </div>
                </div>
              </section>
              {/* <h2>comments :</h2> */}
              {/* single comments */}
              {/* <SingleComment comment={post} /> */}
              {/* comments */}
              {/* <PostComments post={post} /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PostSlug;

export async function getServerSideProps(ctx) {
  const { query, params } = ctx;
  const { data } = await axios.get(
    `http://localhost:5000/api/posts?limit=10&${query.PostSlug}`
  )
  // const { data: post } = await axios.get(
  //   "http://localhost:5000/api/post-comment/save-comment"
  // );
  return {
    props: {
      blogsData: data,
      // post
    },
  };
}
