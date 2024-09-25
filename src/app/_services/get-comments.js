import axios from "@/app/_lib/axiosConfig";


export async function getComments(id) {
  try {
    const response = await axios.get(`/posts/${id}/comments`);
    const comments = response.data;

    
    return comments;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
