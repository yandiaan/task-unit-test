import React from "react";

export default function BlogDetail({title, user, body}) {
  return (
    <div className="p-8 pb-24 flex flex-col gap-4">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <h1 className="text-gray-400 italic">Created By : {user.name}</h1>
      <p className="text-white">{body}</p>
    </div>
  );
}
