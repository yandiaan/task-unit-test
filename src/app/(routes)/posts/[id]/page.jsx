import BlogDetails from "@/app/_modules/posts/detail";
import React from "react";

export default async function Page({ params }) {
  
  return (
    <BlogDetails id={params.id} />
  );
}
