"use client";

import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";

const PostWidget = ({ categories, slug }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      <div className="flex items-center w-full mb-4">
        <div className="w-16 flex-none ">
          <img
            src="../../default_featured_image_url.jpg"
            alt="post"
            height="60px"
            width="60px"
            className="align-middle rounded-full"
          />
        </div>
        <div className="flex-grow ml-3">
          <p className="text-gray-500 font-xs">date</p>
          <Link href={`/post/${slug}`}>title</Link>
        </div>
      </div>
    </div>
  );
};

export default PostWidget;
