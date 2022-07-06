import baseAxios from "../core/api/axios/baseAxios";

class CommentsService {
  static async getAllComments(id) {
    try {
      const res = await baseAxios.get(`/news/${id}/comments`);
      return res?.data || res;
    } catch (error) {
      throw error.message;
    }
  }
  static async createAComment(id, data) {
    try {
      const res = await baseAxios.post(`/news/${id}/comments`, data);
      return res?.data || res;
    } catch (error) {
      throw error.message;
    }
  }
  static async editComment(id, commentId, data) {
    try {
      const res = await baseAxios.put(
        `/news/${id}/comments/${commentId}`,
        data
      );
      return res?.data || res;
    } catch (error) {
      throw error.message;
    }
  }
  static async deleteComment(id, commentId) {
    try {
      const res = await baseAxios.delete(`/news/${id}/comments/${commentId}`);
      return res?.data || res;
    } catch (error) {
      throw error.message;
    }
  }
}

export default CommentsService;
