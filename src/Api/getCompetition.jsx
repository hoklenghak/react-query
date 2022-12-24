import axios from "axios";

const competitionApi = axios.create({
  baseURL: "http://127.0.0.1:4000",
});

export default competitionApi;
