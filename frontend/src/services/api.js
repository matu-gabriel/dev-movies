import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "3b0badaee05c928aefeca30c3b2044a2",
    language: "pt-BR",
    page: 1,
  },
});

export default api;
