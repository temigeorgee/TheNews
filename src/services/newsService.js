import baseAxios from "../core/api/axios/baseAxios";

class NewsService {
  static async getANews(id) {
    try {
      const res = await baseAxios.get(`/news/${id}`);
      return res?.data || res;
    } catch (error) {
      throw error.message;
    }
  }
  static async getNews(page) {
    try {
      const res = await baseAxios.get(`/news?page=${page || 1}&limit=5`);
      return res?.data || res;
    } catch (error) {
      throw error.message;
    }
  }
  static async createNews(data) {
    try {
      const res = await baseAxios.post("/news", data);
      return res?.data || res;
    } catch (error) {
      throw error.message;
    }
  }
  static async uploadImage(data) {
    try {
      const res = await baseAxios.post(`/news/${data.newsId}/images`, data);
      // return res?.data || res;
      return res;
    } catch (error) {
      throw error.message;
    }
  }
  static async deleteNews(id) {
    try {
      const res = await baseAxios.delete(`/news/${id}`);
      if (res.status === 200) {
        window.location.href = "/";
      }
    } catch (error) {
      throw error.message;
    }
  }
}

export default NewsService;
