import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import DemoUser from '../DemoUser';
import './Navigation.css';

const NavBar = () => {
	const user = useSelector((state) => state.session.user);

	return (
		<nav>
			<ul>
				<div className='navbar left'>
					<li className='navbar logo'>
						<NavLink to='/' exact={true} activeClassName='active'>
							<img src='grammygramlogo.png'></img>
						</NavLink>
					</li>
				</div>
				<div className='navbar right'>
					<li className='navbar home'>
						<NavLink to='/' exact={true} activeClassName='active'>
							<img
								src='outline_home_black_48dp_1x.png'
								alt='Home'
							></img>
						</NavLink>
					</li>
					{user ? null : (
						<li>
							<NavLink
								to='/login'
								exact={true}
								activeClassName='active'
							>
								Login
							</NavLink>
						</li>
					)}
					{user ? null : (
						<li>
							<NavLink
								to='/sign-up'
								exact={true}
								activeClassName='active'
							>
								Sign Up
							</NavLink>
						</li>
					)}
					{user ? (
						<li>
							<LogoutButton />
						</li>
					) : (
						<li>
							<DemoUser />
						</li>
					)}
				</div>
			</ul>
		</nav>
	);
};

export default NavBar;
