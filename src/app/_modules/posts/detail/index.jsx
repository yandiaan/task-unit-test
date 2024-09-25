import { getComments, getPostById, getUser } from "@/app/_services";
import React from "react";
import BlogDetail from "../components/blogDetail";
import CommentCount from "../components/commentCount";
import CommentList from "../components/commentList";

export default async function BlogDetails({ id }) {
  const { user_id, title, body } = await getPostById(id);
  const comments = await getComments(id);
  const user = await getUser(user_id);

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-24 bg-orange-600 dark:bg-cyan-950 pt-28">
        <BlogDetail title={title} user={user} body={body} />
      </div>
      <div className="min-h-[50vh] px-24 mt-6">
        <CommentCount count={comments.length} />
        <CommentList comments={comments} />
      </div>
    </div>
  );
}
