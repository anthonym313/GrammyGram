
const POST_COMMENT = "post/POST_COMMENT";
const GET_COMMENT = "GET/GET_COMMENT";


export const getComment = (comment) => ({
  type: GET_COMMENT,
  comment,
});

export const postComment = (comment) => ({
  type: POST_COMMENT,
  comment,
});

// GET
export const getAllComments = (imageId) => async (dispatch) => {
  const res = await fetch(`/api/posts/${imageId}/comments`);
  if (res.ok) {
    const allComments = await res.json();
    dispatch(getComment(allComments));
  }
};

// POST
export const newComment = (newComment, imageId) => async (dispatch) => {
  const res = await fetch(`/api/comment/${imageId}/comments/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newComment),
  });

  if (res.ok) {
    const createdComment = await res.json();
    dispatch(postComment(createdComment));
    return res;
  }
};
const initialState = { comment: "" };
const commentReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case GET_COMMENT:
      action.comment.forEach((comment) => {
        newState[comment.id] = comment;
      });
      return { ...newState };
    case POST_COMMENT:
      newState = {
        ...state,
        [action.comment.id]: action.comment,
      };
      return newState;
    default:
      return state;
  }
};

export default commentReducer;
