import axios from "@/app/_lib/axiosConfig";

export async function updateUser(id_user, payload) {
  return await axios.patch(`/users/${id_user}`, payload).catch((error) => {
    return error;
  });
}
