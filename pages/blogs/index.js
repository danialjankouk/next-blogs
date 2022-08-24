import React, { useState } from "react";
import axios from "axios";
//components
import Category from "components/category";
import Sort from "components/sort";
import Blogs from "components/Blogs";
import Layer from "components/Layer";
import http from "services/httpService";
const CategoryPage = ({ blogsData, categoryData }) => {
  return (
    <div className="bg-gray-200 container mx-auto ">
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
export default CategoryPage;

export async function getServerSideProps({req}) {
  const { data: result } = await http.get(
    "/posts?limit=10",
    { withCredentials: true, headers: { Cookie: req.headers.cookie || ""} }
  );
  const { data: categoryData } = await http.get(
    "/post-category"
  );
  return {
    props: {
      blogsData: result,
      categoryData,
    },
  };
}
