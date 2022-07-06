import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://5e4bfc87a641ed0014b02740.mockapi.io/api/clane",
  // baseURL:
  //   "https://api.clane.com/api/v1/news/v1/public/categories/10/articles?page=1&size=50",
});

export default axiosInstance;
