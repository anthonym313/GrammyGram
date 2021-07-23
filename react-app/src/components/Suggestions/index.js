import React from 'react'
import {useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './Suggestions.css'
import {useSelector} from "react-redux"
import { getFiveRandomUsers } from '../../store/user';

export default function Suggestions(){
    const user = useSelector((state)=>state.session.user)
    const suggestions = useSelector((state) => state.randomUsers)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFiveRandomUsers())

    }, [dispatch]);



    return(
            <div className="UserSide-container">
                    <div className='user-avi_small'>
                        {/* <img src={user.avatar} alt='small avi'></img> */}
                    </div>
                    <div>
                        <h3>{user.username}</h3>
                    </div>
                    <h2>Suggestions For You</h2>
                    {suggestions?.map((randomUser)=>{
                        return(
                            <div>
                                <div>
                                    <img src={randomUser.avatar} alt='random-user'></img>
                                    <h3>{randomUser.username}</h3>
                                </div>



                            </div>

                        )
                    })}


            </div>


    )
}

