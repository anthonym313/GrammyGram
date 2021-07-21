import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { postImageThunk } from '../../store/post';

const PostForm = () => {
    // const [errors, setErrors] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();


    const updateImageUrl = (e) => {
        setImageUrl(e.target.value);
    };

    const updateDescription = (e) => {
        setDescription(e.target.value);
    };

    let image_url = imageUrl;
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(postImageThunk({ image_url, description: description, user_id: user.id }));
    }


    return (
        <form onSubmit={onSubmit}>
            <div>
                {/* {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))} */}
            </div>
            <div>
                <label>Image URL</label>
                <input
                    name='Image Url'
                    type='text'
                    placeholder='Image Url'
                    value={image_url}
                    onChange={updateImageUrl}
                />
            </div>
            <div>
                <label>Description</label>
                <input
                    name='Description'
                    type='text'
                    placeholder='Description'
                    value={description}
                    onChange={updateDescription}
                />
                <button type='submit'>Upload</button>
            </div>
        </form>
    );
};

export default PostForm;
