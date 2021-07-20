const RANDOM_USER = 'user/RANDOM_USER';

const randomUser = (randomList)=>({
    type: RANDOM_USER,
    randomList
})

export const getFiveRandomUsers=()=>async(dispatch)=>{
    const response = await fetch('/api/users/random', {
     headers:{
        'Content-Type': 'application/json'
     }   
    });
    if (response.ok){
        const users = await response.json();
        dispatch(randomUser(users));
        return "SUCCESSFULLY GOT RANDOM USERS"
    }
    
}
const initialState = {}
export default function reducer(state=initialState, action){
    let newState={}
    switch(action.type){
        case RANDOM_USER:
            newState ={
                ...state, usersList:action.randomList
            }
            return newState
        default:
            return state;
    }
}