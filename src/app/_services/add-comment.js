import axios from "@/app/_lib/axiosConfig";

export async function addComment(post_id, payload) {
  return await axios
    .post(`/posts/${post_id}/comments`, payload)
    .catch((error) => {
      return error;
    });
}
