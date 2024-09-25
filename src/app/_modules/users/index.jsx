import React from "react";

import { getAllUsers } from "@/app/_services";
import FormUser from "./components/formUser";
import UserList from "./components/userList";

export default async function Users() {
  const users = await getAllUsers(1);
  return (
    <div>
      <FormUser />
      <div className="min-h-[25vh] px-24 py-8">
        <h1 className="text-2xl font-bold text-center">List Users</h1>
        <UserList users={users} />
      </div>
    </div>
  );
}
