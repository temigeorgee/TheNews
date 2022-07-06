import NewsService from "../../services/newsService";
import { toast } from "react-toastify";

export const news = {
  state: [],
  reducers: {
    getANews(state, payload) {
      return payload;
    },
    getAllNews(state, payload) {
      return payload;
    },
    addNews(state, payload) {
      return [payload, ...state];
    },
    deleteNews(state, payload) {
      return state.filter((el) => el.id !== payload.id);
    },
  },
  effects: (dispatch) => ({
    async getANewsAsync(id) {
      try {
        const aNews = await NewsService.getANews(id);
        dispatch.news.getANews(aNews);
      } catch (error) {
        toast.dark(error);
      }
    },
    async getAllNewsAsync(page) {
      try {
        const allNews = await NewsService.getNews(page);
        dispatch.news.getAllNews(allNews);
      } catch (error) {
        toast.dark(error);
      }
    },
    async addNewsAsync(data) {
      try {
        const news = await NewsService.createNews(data);
        dispatch.news.addNews(news);
      } catch (error) {
        toast.dark(error);
      }
    },
    async deleteNewsAsync(id) {
      try {
        const news = await NewsService.deleteNews(id);
        dispatch.news.deleteNews(news);
      } catch (error) {
        toast.dark(error);
      }
    },
  }),
};
