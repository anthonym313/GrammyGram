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
export const postImageThunk = (payload) => async(dispatch) => {
  const res = await fetch('/api/post', {
    method: 'POST',
    body: JSON.stringify(payload)
  })
  const newPost = await res.json()
  dispatch(postImage(newPost))
}

const initialState = {}
const imageReducer = (state = initialState, action) => {
  let newState = {}
  switch (action.type) {
    case POST_IMAGE:
      newState = {
        ...state,
        [action.image.id]: action.image
      }
      return newState
  }

}

export default imageReducer
