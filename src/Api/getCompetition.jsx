import axios from "axios";

const competitionApi = axios.create({
  baseURL: "https://api.publicapis.org/",
});

export default competitionApi;
