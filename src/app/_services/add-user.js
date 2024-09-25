import axios from "@/app/_lib/axiosConfig";

export async function addUser(payload) {
  const response = await axios.post(`/users`, payload);
  const user = response.data;

  return user;
}
