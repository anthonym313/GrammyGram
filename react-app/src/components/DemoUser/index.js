import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

export default function DemoUser(){
    const dispatch = useDispatch();
    const demoLogin = async (e) => {
		e.preventDefault();
		return await dispatch(login('demo@aa.io', 'password'));
	};

    return(
        <button onClick={(e) => demoLogin(e)}>Demo User</button>
    )
}