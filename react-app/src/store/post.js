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
  console.log('HAHAHAHAHAHAHAHAHAHAHAHAHA => ', payload);
  const res = await fetch('/api/post', {
    method: 'POST',
     headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      payload
    })
  })
  console.log('OVERHEREEEEEEEEE  AFTER => ', payload);
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
