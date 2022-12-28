import axios from "axios";

export const PostApi = axios.create({
  baseURL: "http://localhost:3000/",
});
