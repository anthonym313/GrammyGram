import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSmallGroupOfUsers } from "../../store/user";
import './SmallSuggestions.css'

export default function SmallSuggestions(){
    const smallRandomUserList = useSelector((state) => state.smallRandGroup)

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getSmallGroupOfUsers());
    },[dispatch]);

return(
    <div >
        
        <div className = 'random-holder'>
            {smallRandomUserList?.map((user)=>{
                return (
                    <div className='random-div'>
                        <img
                        src={user.avatar}
                        className="random-usr"
                        alt="random-user"
                        ></img>
                        <p className="random-username">
                        {user.username.substring(0, 7) + "..."}
                        </p>
                    </div>
                  
                )
            })}
        </div>
    </div>
)
}