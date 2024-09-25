import axios from "@/app/_lib/axiosConfig";

export async function deleteUser(user_id) {
  return await axios.delete(`/users/${user_id}`).catch((error) => {
    return error;
  });
}
