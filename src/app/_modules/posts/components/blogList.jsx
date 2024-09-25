import React from "react";
import BlogCard from "./blogCard";

export default function BlogList({ posts }) {
  return (
    <>
      {posts.map(({ id, author, commentCount, title, body }, key) => (
        <BlogCard
          key={id}
          id={id}
          commentCount={commentCount}
          author={author}
          title={title}
          body={body}
        />
      ))}
    </>
  );
}
