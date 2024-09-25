import React from "react";
import CommentCard from "./commentCard";

export default function CommentList({ comments }) {
    
    if(comments.length > 0) {
        return (
            <div className="divide-y-2 flex flex-col gap-8 pb-12">
              {comments.map(({ name, email, body }) => (
                <CommentCard name={name} email={email} body={body} />
              ))}
            </div>
          );
    }
    return (
        <div className="w-full text-center">
            <h1 className="text-gray-600 dark:text-gray-200">
                No Comments Yet
            </h1>
        </div>
    )
  
}
