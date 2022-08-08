import React, { useState } from "react";
//components
import Category from "components/category";
import Sort from "components/sort";
import Blogs from "components/Blogs";
const HomePage = () => {
  return (
    <div className="bg-gray-200 h-auto">
      <div className="container mx-auto py-2 px-2">
        <div className="grid gap-4 md:grid-cols-12 md:grid-rows-[70px_minmax(300px,_1fr)] min-h-screen">
          {/*--------------- category---------------- */}
          <Category />
          {/* ------------------sort---------------- */}
          <Sort/>
          {/* ---------------blogs--------------*/}
          <Blogs />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
