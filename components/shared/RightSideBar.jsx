import React from "react";

import { PostWidget, Categories } from "@/components";
const RightSideBar = ({ slug, categories }) => {
  return (
    <div className=" grid lg:col-span-4 col-span-1">
      <div className="lg:sticky relative top-8 ">
        <PostWidget
          slug={slug}
          categories={categories.map((category) => category.slug)}
        />
        <Categories />
      </div>
    </div>
  );
};

export default RightSideBar;
