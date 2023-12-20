"use client";

import React, { useState, useEffect } from "react";
import moment from "moment";
import parse from "html-react-parser";

import { getComments } from "@/services";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, []);

  return (
    <>
      {comments.length > 0 ? (
        <div className="bg-white shadow-lg rounded-lg pb-3 py-4 mb-8 px-8">
          <h3 className=" font-semibold mb-6">{comments.length} Comments</h3>
          {comments.map((comment) => (
            <div
              key={comment.createdAt}
              className="border-b border-gray-100 mb-4 last:mb-0 last:border-0 pb-4 "
            >
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{" "}
                {moment(comment.createdAt).format("MMM DD, YYYY")}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg pb-6 py-4 mb-8 px-8">
          <p className="font-semibold">No Comments to show</p>
        </div>
      )}
    </>
  );
};

export default Comments;
