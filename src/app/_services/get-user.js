import axios from "@/app/_lib/axiosConfig";

export async function getUser(id) {
    try {
      const response = await axios.get(`/users/${id}`);
      const user = response.data;
      return user;
    } catch (error) {
      if (error.code === "ERR_BAD_REQUEST") {
        return {
          name: "Anonymous User",
        };
      }
    }
  }