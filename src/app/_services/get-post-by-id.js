import axios from "@/app/_lib/axiosConfig";

export async function getPostById(id) {
    try {
      const response = await axios.get(`/posts/${id}`);
  
      const posts = response.data;
  
      return posts;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  }