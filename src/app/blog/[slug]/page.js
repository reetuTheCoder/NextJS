import React from "react";

const BlogPost = ({ params }) => {
  return (
    <div>
      <h1>Post: {params.slug}</h1>
        <p>You are viewing the blog post with slug: <strong>my-first-post</strong></p>

    </div>
  );
};

export default BlogPost;


//http://localhost:3000/blog/my-first-post you will get you dynamic route like this