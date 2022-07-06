import CommentsService from "../../services/commentService";
import { toast } from "react-toastify";

export const comments = {
  state: {
    error: "",
    comments: {},
  },
  reducers: {
    getAllComment(state, payload) {
      return {
        ...state,
        comments: {
          [payload.id]: payload.comments,
        },
      };
    },

    createComment(state, payload) {
      const newsComment = state.comments[payload.newsId];
      newsComment.push(payload);
      return {
        ...state,
        error: "",
        comments: {
          ...state.comments,
          [payload.newsId]: newsComment,
        },
      };
    },
  },
  effects: (dispatch) => ({
    async getAllCommentAsync(id) {
      try {
        const allComment = await CommentsService.getAllComments(id);
        dispatch.comments.getAllComment({ id, comments: allComment });
      } catch (error) {
        toast.dark(error);
      }
    },

    async createCommentAsync(data) {
      try {
        const comment = await CommentsService.createComment(
          data.newsId,
          data.body
        );
        console.log(comment);
        dispatch.comments.createComment(comment);
      } catch (error) {
        toast.dark(error);
      }
    },
  }),
};
