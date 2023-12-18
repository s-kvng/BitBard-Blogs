import React from "react";
import { useParams } from "next/navigation";

import { Comments, CommentsForm, PostDetail } from "@/components";

const PostDetails = () => {
  return (
    <div className="lg:col-span-8 col-span-1">
      PostDetails
      <PostDetail />
      <CommentsForm />
      <Comments />
    </div>
  );
};

export default PostDetails;
