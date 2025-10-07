import React from "react";

const BlogPost = ({ params }) => {
  const { slug } = params;
  return (
    <div>
      {/* <h1>Post: {params.slug}</h1>
      <p>
        You are viewing the blog post with slug: <strong>my-first-post</strong>
      </p> */}

      <h1>
        {slug
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}
      </h1>
      <p> Post slug: {slug}</p>
    </div>
  );
};

export default BlogPost;

//http://localhost:3000/blog/my-first-post you will get you dynamic route like this
