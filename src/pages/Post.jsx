import React from "react";
import { Postblock } from "../components";
import { PostHeader } from "../modules";
import { publication } from "../TESTDATA/Post";

const Post = () => {
  return (
    <div className="flex flex-row justify-between gap-x-4">
      <div className="flex flex-col flex-grow gap-y-3 overflow-y-auto">
        {publication.map((post, index) => (
          <Postblock publication={post} key={index} />
        ))}
      </div>
      <div>
        <PostHeader />
      </div>
    </div>
  );
};

export default Post;
