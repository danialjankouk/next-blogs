import React, { useState } from "react";
import axios from "axios";
//components
import Category from "components/category";
import Sort from "components/sort";
import Blogs from "components/Blogs";
import Layer from "components/Layer";
import queryString from "query-string";
import http from "services/httpService";
const CategoryPage = ({ blogsData, categoryData }) => {
  return (
    <div className="container w-full mx-auto">
      {/* header */}
      <Layer />
      <div className=" py-2 px-2">
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

export async function getServerSideProps({ req, query }) {
  const { data: result } = await http.get(
    `/posts?${queryString.stringify(query)}&limit=10`,
    { withCredentials: true, headers: { Cookie: req.headers.cookie || "" } }
  );
  const { data: categoryData } = await http.get("/post-category");
  return {
    props: {
      blogsData: result,
      categoryData,
    },
  };
}
