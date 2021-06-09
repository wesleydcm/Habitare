import axios from "axios";

const api = axios.create({
  baseURL: "https://kabit-api.herokuapp.com/",
});

export default api;
