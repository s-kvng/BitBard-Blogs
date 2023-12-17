import React from "react";

import { PostWidget, Categories } from "@/components";
const RightSideBar = () => {
  return (
    <div className=" grid lg:col-span-4 col-span-1">
      <div className="lg:sticky relative top-8 bg-red-200">
        <PostWidget />
      </div>
    </div>
  );
};

export default RightSideBar;
