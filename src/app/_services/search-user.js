import axios from "@/app/_lib/axiosConfig";

export async function searchUser(user_name) {
  return await axios.get(`/users?name=${user_name}`).catch((error) => {
    return error;
  });
}
