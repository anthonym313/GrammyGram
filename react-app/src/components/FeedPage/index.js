import React from 'react'
import { useState,useEffect } from 'react';
import './Feed.css'
import {useSelector} from "react-redux"
import { getFiveRandomUsers } from '../../store/user';

export default function Feed(){
    // const usersImages= useSelector((state)=> Object.values(state.images))
    const randUsers = useSelector((state) => state.randomUsers)
    const user = useSelector((state) => state.session.user);
    const [users, setUsers] = useState([]);
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        getFiveRandomUsers()
    }, []); 

    // useEffect(()=>{
    //     const randomUsers = (users)=>{
    //         const allUsers = Object.assign({},users)
    //         let arr=[]
    //         for(let i=0;i < 5; i++){
    //             let num = Math.floor(Math.random()*Object.keys(allUsers).length)
    //             arr.push(allUsers[num])
    //         }
    //         return arr
    //     }   
    //     setSuggestions(randomUsers(users));

    // },[users])

    return(
        <div className='feedpage-container'>
            <div className='users_images-container'>
                {/* <div className='users_image_list'>
                    {usersImages?.map((image)=>{
                        return(
                            <div className="images">
                                <img src={image.image_url} alt='a users photo'></img>
                                <div className='image-description-box'>
                                    <p>{image.description}</p> 
                                </div>
                                <div className='Comments' hidden='true'>
                                    <CommentList/>
                                </div>
                            </div>
                        )
                    })}

                </div> */}

            </div>
            <div className="UserSide-container">
                    <div className='user-avi_small'>
                        <img src={user.avatar} alt='small avi'></img>
                    </div>
                    <div>
                        <h3>{user.username}</h3>
                    </div>
                    <h2>Suggestions For You</h2>
                    {suggestions?.map((randomUser)=>{
                        console.log(randomUser)
                        return(
                            <div>
                                <div>
                                    <img src={randomUser.avatar}></img>
                                    <h3>{randomUser.username}</h3>
                                </div>
                                
                            </div>

                        )
                    })}


            </div>
        </div>
    )
}