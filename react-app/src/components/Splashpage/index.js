import './splashpage.css'
import SignUpForm from "../auth/SignUpForm"
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, Redirect } from "react-router-dom";
import { login } from "../../store/session";
import DemoUser from '../DemoUser'


function SplashPage() {
  // const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);

   const demoUser = async (e) => {
    e.preventDefault()
     dispatch(login('demo@aa.io', 'password'));
     history.push('/posts')
   }

   if (user) {
    return <Redirect to="/posts/" />;
  }

  return (
    <>
      <div className='splash-div'>
      </div>
      <div className='intro-box'>
        <h1>Welcome to <span className='coloredWord'>Grammy</span><span className='secondWord'>Gram</span>!</h1>
        <h3> Where people who have won Grammy's,</h3>
        <h3> been nominated for Grammy's,</h3>
        <h3> or just love Grammy's come together as a community!</h3>
        <div>
          <Link to={'/sign-up'}
            style={{ textDecoration: "none" }}
          >
          <button className='sign-up-modal-btn'>
            {/* onClick={() => setShowModal(true)} */}
          Sign Up
        </button>
        </Link>
      </div>
         {/* <SignUpForm
          // showModal={showModal}
          // setShowModal={setShowModal}
        /> */}
        <div className='demo-buttons'>
          <div>
          <button className='sign-up-modal-btn' onClick={demoUser}>
            Demo User
          </button>
            {/* < DemoUser/> */}
        </div>
        <div>
        </div>
        </div>
      </div>
    </>
  );
}
export default SplashPage;
