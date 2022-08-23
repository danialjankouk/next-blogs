import React, { useState } from "react";
import axios from "axios";
//components
import Category from "components/category";
import Sort from "components/sort";
import Blogs from "components/Blogs";
import Layer from "components/Layer";
const PostPage = ({ blogsData, categoryData }) => {
  return (
    <div className="bg-gray-200 h-auto">
      {/* header */}
      <Layer />
      <div className="container mx-auto py-2 px-2">
        <div className="grid gap-4 md:grid-cols-12 md:grid-rows-[70px_minmax(300px,_1fr)] min-h-screen">
          {/*--------------- category---------------- */}
          <Category categoryData={categoryData} />
          {/* ------------------sort---------------- */}
          <Sort />
          {/* ---------------blogs--------------*/}
          <Blogs blogsData={blogsData} />
        </div>
      </div>
    </div>
  );
};
export default PostPage;

export async function getServerSideProps(context) {
  const { data: result } = await axios.get(
    "http://localhost:5000/api/posts?limit=10"
  );
  const { data: categoryData } = await axios.get(
    "http://localhost:5000/api/post-category"
  );
  return {
    props: {
      blogsData: result,
      categoryData,
    },
  };
}
