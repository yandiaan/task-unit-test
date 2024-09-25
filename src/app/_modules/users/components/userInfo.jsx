import Link from "next/link";
import React from "react";

export default function UserInfo({id, name, email, status}) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <Link href={`/users/${id}`}>
        <h1 className="text-xl">{name}</h1></Link>
        
        <div className={`${status === "active" ? "bg-green-500" : "bg-yellow-400"} rounded-full p-1 text-xs`}>{status}</div>
      </div>
      <span className="text-xs text-gray-700 italic">
        {email}
      </span>
    </div>
  );
}
