import React,{useState} from 'react';
import { useDispatch } from 'react-redux';

import './UserProfileEdit.css'

export default function UserProfileEdit(user, setShowEditor){
    const dispatch = useDispatch();
    const [avatar, updateAvatar]= useState(user.avatar);
    const [username, updateUsername] = useState(user.username);

    handleUserEditSubmit(){
        e.preventDefault();
        dispatch()
        setShowEditor(true)

    }

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