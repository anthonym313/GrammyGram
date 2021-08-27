import React,{useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { editProfile } from '../../store/session';
import { Redirect,useLocation } from 'react-router-dom';
import './UserProfileEdit.css'

export default function UserProfileEdit({user, editshow}){
    const dispatch = useDispatch();
    const location = useLocation();
    const [avatar, updateAvatar]= useState(user.avatar);
    const [username, updateUsername] = useState(user.username);

    function handleUserEditSubmit(e){
        e.preventDefault();
        window.confirm('Are you sure you want to update your profile?')
        dispatch(editProfile(avatar, username, user.id))
        window.location.reload(true);
        {editshow(false)}
            
    }
        
    

    useEffect(()=>{

    },[avatar,username])

    return user && (
        <div>
            <form>
                <div>
                    <label>Change Avatar</label>
                    <input
                    type='text'
                    name='avatar'
                    placeholder={user.avatar}
                    onChange={(e)=> updateAvatar(e.target.value)}
                    value = {avatar}
                    required={true}
                    ></input>
                </div>
                <div>
                    <label>Update User Name</label>
                    <input
                    type='text'
                    name='username'
                    placeholder={user.username}
                    onChange={(e)=> updateUsername(e.target.value)}
                    value={username}
                    required={true}
                    ></input>
                </div>
                <div>
                    <button type="submit" onClick={handleUserEditSubmit}>Submit</button>
                </div>

            </form>
        </div>
    )
}