import axios from "@/app/_lib/axiosConfig";

const convertObjectToArray = (obj) => {
  return Object.values(obj);
};

export async function getAllUsers(page) {
    try {
      const res = await axios.get(`/users?page=${page}&per_page=10`);
      const data = res.data;
 
      const convertedData = Array.isArray(data) ? data : convertObjectToArray(data);
      
      return convertedData;
    } catch (error) {
      return error.message;
    }
  }