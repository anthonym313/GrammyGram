const POST_IMAGE = 'post/POST_IMAGE';
const DELETE_IMAGE = 'post/DELETE_IMAGE';
const GET_IMAGE = 'post/GET_IMAGE';

export const getImage = (image) => ({
  type: GET_IMAGE,
  image
})

export const postImage = (image) => ({
  type: POST_IMAGE,
  image
})

//CREATE
export const postImageThunk = (image_url, description) => async (dispatch) => {
  const res = await fetch('/api/post', {
    method: 'POST',
    body: JSON.stringify({
      image_url,
      description
    })
  })
  const newPost = await res.json()
  dispatch(postImage(newPost))
}

const initialState = { image: null }

const imageReducer = (state = initialState, action) => {
  let newState = {}
  switch (action.type) {
    case POST_IMAGE:
      newState = {
        ...state,
        [action.image.id]: action.image
      }
      return newState
    default:
      return state;
  }

}

export default imageReducer
