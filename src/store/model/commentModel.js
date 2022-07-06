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

    //   addComment(state, payload) {
    //     const newsComment = state.comments[payload.newsId];
    //     newsComment.push(payload);
    //     return {
    //       ...state,
    //       error: "",
    //       comments: {
    //         ...state.comments,
    //         [payload.newsId]: newsComment,
    //       },
    //     };
    //   },
    //   editComment(state, payload) {
    //     const newsComment = state.comments[payload.newsId];
    //     const index = getExistingIndex(payload.id, newsComment);
    //     newsComment[index] = payload;

    //     return {
    //       ...state,
    //       error: "",
    //       comments: {
    //         ...state.comments,
    //         [payload.newsId]: newsComment,
    //       },
    //     };
    //   },

    //   delete(state, payload) {
    //     return {
    //       ...state,
    //       error: "",
    //       comments: {
    //         ...state.comments,
    //         [payload.id]: state.comments[payload.id].filter(
    //           (el) => el.id !== payload.comment.id
    //         ),
    //       },
    //     };
    //   },
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

    //   async addCommentAsync(data) {
    //     try {
    //       const comment = await createComment(data.newsId, data.body);
    //       dispatch.comments.addComment(comment);
    //     } catch (error) {
    //       showToast("error", error);
    //     }
    //   },

    //   async editCommentAsync(data) {
    //     try {
    //       const comment = await editComment(
    //         data.newsId,
    //         data.commentId,
    //         data.body
    //       );
    //       dispatch.comments.editComment(comment);
    //     } catch (error) {
    //       showToast("error", error);
    //     }
    //   },
    //   async deleteCommentAsync(data) {
    //     try {
    //       const comment = await deleteComment(data.newsId, data.commentId);
    //       dispatch.comments.delete({ id: comment.newsId, comment });
    //     } catch (error) {
    //       showToast("error", error);
    //     }
    //   },
  }),
};
