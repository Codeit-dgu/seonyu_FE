import React from "react";
import PostDetail from "../components/PostDetails";

const PostPage = ({ posts }) => {
  return (
    <div>
      <PostDetail posts={posts} />
    </div>
  );
};

export default PostPage;
