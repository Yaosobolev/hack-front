import React from "react";
import { PostBlock } from "../components";
import { PostHeader } from "../modules";
import { publication } from "../TESTDATA/Post";

const Post = () => {
  return (
    <div className="flex flex-row justify-between gap-x-4">
      <div className="flex flex-col flex-grow gap-y-3 overflow-y-auto">
        {publication.map((post, index) => (
          <PostBlock publication={post} key={index} handleClick />
        ))}
      </div>
      <div>
        <PostHeader />
      </div>
    </div>
  );
};

export default Post;
