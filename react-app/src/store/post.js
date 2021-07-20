// import fetch from 'node-fetch'

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
export const postImageThunk = (payload) => async (dispatch) => {
  const res = await fetch('/api/post/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  const newPost = await res.json()
  dispatch(postImage(newPost))
}


export const getImagesThunk = () => async (dispatch) => {
  const res = await fetch('/api/post/feed')
  if (res.ok) {
    const allImages = await res.json();
    dispatch(getImage(allImages))
  }
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
    case GET_IMAGE:
      action.imgage.forEach(photo => {
        newState[photo.id] = photo;
      })
      return {
        ...newState
      }
    default:
      return state;
  }

}

export default imageReducer
