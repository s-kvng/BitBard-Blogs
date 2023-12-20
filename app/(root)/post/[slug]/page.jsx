"use client";

import React, { useEffect, useState } from "react";

import {
  Comments,
  CommentsForm,
  PostDetail,
  Author,
  RightSideBar,
} from "@/components";
import { useParams } from "next/navigation";
import { getPostDetails } from "@/services";

const PostDetails = () => {
  const [post, setPost] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    getPostDetails(slug)
      .then((result) => {
        setPost(result);
      })
      .catch((error) => {
        console.error("Error fetching post details:", error);
        // Handle the error, maybe set a default post or show a friendly error message
      });
  }, [slug]); // Include dependencies if needed, in this case, we're watching for changes in 'slug'

  // Check if 'post' is an empty object
  if (Object.keys(post).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="lg:col-span-8 col-span-1">
        <PostDetail post={post} />
        <Author author={post.author} />
        <CommentsForm slug={post.slug} />
        <Comments slug={post.slug} />
      </div>
      <RightSideBar slug={post.slug} categories={post.categories} />
    </>
  );
};

export default PostDetails;
