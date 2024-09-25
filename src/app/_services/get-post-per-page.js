import axios from "@/app/_lib/axiosConfig";
import { getComments } from "./get-comments";
import { getUser } from "./get-user";

const convertObjectToArray = (obj) => {
  return Object.values(obj);
};

export async function getPostsPerPage(page) {
    try {
      let posts = [];
      const reqPosts = await axios.get(`/posts?page=${page}&per_page=10`);
      const dataPosts = await reqPosts.data;

      const data = Array.isArray(dataPosts) ? dataPosts : convertObjectToArray(dataPosts);
      
      const getUserPromises = data.map(
        async ({ id, user_id, title, body }) => {
          const reqComments = await getComments(id);
          const user = await getUser(user_id);
          posts.push({
            id,
            user_id,
            title,
            body,
            author: user.name,
            commentCount: reqComments?.length,
          });
        }
      );
  
      await Promise.all(getUserPromises);
  
      return posts;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  }