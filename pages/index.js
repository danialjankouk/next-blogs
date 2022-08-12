import React, { useState } from "react";
import axios from "axios";
//components
import Category from "components/category";
import Sort from "components/sort";
import Blogs from "components/Blogs";
const HomePage = ({ blogsData}) => {
  return (
    <div className="bg-gray-200 h-auto">
      <div className="container mx-auto py-2 px-2">
        <div className="grid gap-4 md:grid-cols-12 md:grid-rows-[70px_minmax(300px,_1fr)] min-h-screen">
          {/*--------------- category---------------- */}
          <Category  />
          {/* ------------------sort---------------- */}
          <Sort />
          {/* ---------------blogs--------------*/}
          <Blogs blogsData={blogsData} />
        </div>
      </div>
    </div>
  );
};
export default HomePage;

export async function getServerSideProps() {
  const { data } = await axios.get(
    "http://localhost:5000/api/posts?page=1&limit=10"
  );
  return {
    props: {
      blogsData: data,
    },
  };
}
