import React from "react";
import { FaComment } from "react-icons/fa";
import Link from "next/link";
import Avatar from "@/app/_components/avatar";

export default function BlogCard({ id, title, body, author, commentCount }) {
  return (
    <div className="py-6 px-8 w-full rounded-xl shadow-lg flex flex-col justify-between">
      <div>
        <h1 className="font-bold hover:text-orange-600 dark:hover:text-cyan-950 text-xl mb-4">
          <Link data-testid={`post-title-${id}`} href={`/posts/${id}`}>
          {title}
          </Link>
        </h1>
        <p className="text-slate-500 dark:text-slate-700">{body.substring(0,100)}...</p>
      </div>
      <div className="flex justify-between mt-8">
        <Avatar text={author} />
        <div className="flex items-center gap-2 text-slate-600 ">
          <FaComment className="text-2xl" />
          <span className="text-xl font-bold">{commentCount}</span>
        </div>
      </div>
    </div>
  );
}
