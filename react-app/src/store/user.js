const RANDOM_USER = 'user/RANDOM_USER';

const randomUser = (randomList)=>({
    type: RANDOM_USER,
    randomList
})

export const getFiveRandomUsers=()=>async(dispatch)=>{
    const response = await fetch('/api/users/random');
    if (response.ok){
        const users = await response.json();
        console.log('thunk', users)
        dispatch(randomUser(users));
        return "SUCCESSFULLY GOT RANDOM USERS"
    }
    
}
const initialState = []
export default function reducer(state=initialState, action){
    switch(action.type){
        case RANDOM_USER:
           return action.randomList
        default:
            return state;
    }
}