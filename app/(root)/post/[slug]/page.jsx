"use client";

import React, { useState } from "react";

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

  getPostDetails(slug).then((result) => {
    setPost(result);
  });

  return (
    <>
      <div className="lg:col-span-8 col-span-1">
        <PostDetail post={post} />
        <Author auhtor={post.author} />
        <CommentsForm slug={post.slug} />
        <Comments slug={post.slug} />
      </div>
      <RightSideBar slug={post.slug} categories={post.categories} />
    </>
  );
};

export default PostDetails;
