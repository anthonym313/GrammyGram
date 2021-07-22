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
		<form onSubmit={onLogin} className='modal'>
			<div>
				{errors.map((error, ind) => (
					<div key={ind}>{error}</div>
				))}
			</div>
			<div className='input-values'>

				<label htmlFor='email'></label>
				<input
					name='email'
					type='text'
					placeholder='Email'
					value={email}
					onChange={updateEmail}
				/>
			</div>
			<div className='input-values'>

				<label htmlFor='password'></label>
				<input
					name='password'
					type='password'
					placeholder='Password'
					value={password}
					onChange={updatePassword}
				/>

			</div>
				<button type='submit' className='modal-button'>Login</button>

			{/* <DemoUser/> */}
		</form>
	);
};

export default LoginForm;
