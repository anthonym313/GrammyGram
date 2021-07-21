import React from 'react';
import {Link} from 'react-router-dom';
import './NotFoundPage.css'

export default function NotFoundPage(){
    return (
        <div className='notfoundpage-container'>
            <h1>Sorry, this page isn't available.</h1>
            <h3>The link you followed may be broken, or the page may have been removed.<Link to='/'>Go back to Grammygram.</Link> </h3>
        </div>
    )
}