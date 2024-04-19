import React from "react";
import { Postblock, PostHeader } from "../components";

const Post = () => {
  return (
    <div className="flex flex-col gap-y-16">
      <PostHeader />
      <div className="flex flex-col gap-y-3">
        <Postblock />
        <Postblock />
        <Postblock />
      </div>
    </div>
  );
};

export default Post;
