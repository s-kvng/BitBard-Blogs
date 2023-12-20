import React from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }) => {
  return (
    <div className=" bg-white shadow-lg rounded-lg p-0 lg:p-6 pb-8 mb-8">
      <div className=" relative overflow-hidden shadow-md  mb-3">
        <img
          src={post.featuredImage?.url || post.featuredImage}
          alt={post.title}
          className="  object-center h-60 lg:h-64 w-full  object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
        {/*  absolute h-96 */}
      </div>
      <h1 className=" transition duration-700 text-center mb-2 cursor-pointer hover:text-pink-600 text-2xl font-bold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center justify-center mb-1 w-full ">
        <div className="flex items-center justify-center mb-3 lg:mb-0 w-full lg:w-4/5 l ">
          <img
            src={post.author.photo?.url || post.author.photo}
            width="30px"
            height="30px"
            alt="profile_image"
            className="rounded-full align-middle"
          />
          <p className="inline align-middle text-gray-600 ml-4 text-lg">
            {post.author.name}
          </p>
        </div>
        <div className="flex justify-center items-center font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>
      <p className=" text-center text-lg text-gray-700 font-normal px-4 lg:p-3 mb-3">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className=" transition duration-500 transform hover:-translate-y-1 hover:shadow-md inline-block bg-pink-600 font-medium rounded-full px-6 py-2 text-white">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
