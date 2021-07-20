import React from 'react'
import { useState,useEffect } from 'react';
import './Feed.css'
import {useSelector} from "react-redux"

export default function Feed(){
    // const usersImages= useSelector((state)=> Object.values(state.images))
    const user = useSelector((state) => state.session.user);
    // const randomUsers
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
        const response = await fetch('/api/users/');
        const responseData = await response.json();
        setUsers(responseData.users);
        }
        fetchData();
    }, []); 

    const randomUsers = (users)=>{
        const allUsers = Object.assign({},users)
        let arr=[]
        for(let i=0;i < 5; i++){
            let num = Math.floor(Math.random()*Object.keys(allUsers).length)
            arr.push(allUsers[num])
        }
        return arr
    }   
    let suggestions = randomUsers(users)
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