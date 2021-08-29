import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
// import DemoUser from '../DemoUser'
import './LoginForm.css';

const LoginForm = () => {
	const [errors, setErrors] = useState([]);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const user = useSelector((state) => state.session.user);
	const dispatch = useDispatch();

	const onLogin = async (e) => {
		e.preventDefault();
		const data = await dispatch(login(email, password));
		if (data) {
			setErrors(data);
		}
	};

	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	if (user) {
		return <Redirect to='/posts' />;
	}

  return (
    <div className='holder-container'>
    <form onSubmit={onLogin} className="modal">
      <div>
        {errors.map((error, ind) => (
			<div key={ind}>{error}</div>
			))}
      </div>
      <div className="loginContainer">
			<h2>Login!</h2>
        <div className="input-values">
          <div>


          {/* {" "} */}
          <span>
            <i aria-hidden="true" className="fa fa-envelope loginpic" />{" "}
          </span>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
            />
            </div>
        </div>
        <div>

          <span>
            <i aria-hidden="true" className="fa fa-lock loginpic"></i>{" "}
          </span>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
            />
            </div>
          <button type="submit" className="modal-button">
            Login
          </button>
      </div>
      {/* <DemoUser/> */}
    </form>
    </div>
  );
};

export default LoginForm;
