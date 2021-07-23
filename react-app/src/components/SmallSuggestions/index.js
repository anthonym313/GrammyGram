import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSmallGroupOfUsers } from "../../store/user";
import './SmallSuggestions.css'

export default function SmallSuggestions(){
    // const smallSug = useSelector((state) => state.)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getSmallGroupOfUsers());
    },[dispatch]);

return(
    <div>
        <h1>hi</h1>
    </div>
)
}