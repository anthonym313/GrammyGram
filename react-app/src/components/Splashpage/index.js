import './splashpage.css'

import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, Redirect } from "react-router-dom";
import { login } from "../../store/session";



function SplashPage() {
 
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
      <div className='dev-icons'>
          Anthony M. <span><a href='https://github.com/anthonym313' target='_blank'><i className='fab fa-github-square'></i></a></span> <span><a href='https://www.linkedin.com/in/anthonyamartin/' target='_blank'><i className='fab fa-linkedin'></i></a></span>
          David M. <span><a href='https://github.com/David7Mejia' target='_blank'><i className='fab fa-github-square'></i></a></span> <span><a href='https://www.linkedin.com/in/david-mejia-349ba4154/' target='_blank'><i className='fab fa-linkedin'></i></a></span>
          Johnn V. <span><a href='https://github.com/johnnvas' target='_blank'><i className='fab fa-github-square'></i></a></span> <span><a href='https://www.linkedin.com/in/johnn-vasquez-0bb352182/' target='_blank'><i className='f=fab fa-linkedin'></i></a></span>
          Joe Z. <span><a href='https://github.com/JoeZhang229' target='_blank'><i className='fab fa-github-square'></i></a></span> <span><a href='https://www.linkedin.com/in/joe-zhang-00229/' target='_blank'><i className='fab fa-linkedin'></i></a></span>
          Project Repo <span><a href='https://github.com/anthonym313/GrammyGram' target='_blank'><i className='fab fa-github-square'></i></a></span>
      </div>
    </>
  );
}
export default SplashPage;
