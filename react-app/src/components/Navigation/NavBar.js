import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import DemoUser from '../DemoUser';
import './Navigation.css';

const NavBar = () => {
	const user = useSelector((state) => state.session.user);

	let sessionLinks;
	if (user) {
		sessionLinks = (
			<>
				<li className='navbar space'></li>
				<li>
					<NavLink to='/' exact={true} activeClassName='active'>
						<img
							src='outline_home_black_48dp_1x.png'
							alt='Home'
						></img>
					</NavLink>
				</li>
				<li>
					<NavLink to='/' exact={true} activeClassName='active'>
						<img
							src='outline_explore_black_48dp_1x.png'
							alt='Explore'
						></img>
					</NavLink>
				</li>
				<li>
					<LogoutButton />
				</li>
			</>
		);
	} else {
		sessionLinks = (
			<>
				<li>
					<NavLink to='/login' exact={true} activeClassName='active'>
						Login
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/sign-up'
						exact={true}
						activeClassName='active'
					>
						Sign Up
					</NavLink>
				</li>
				<li>
					<DemoUser />
				</li>
			</>
		);
	}
	return (
		<nav className='navbar'>
			<ul className='navbar navlinks'>
				<div className='navbar left'>
					<li className='navbar logo'>
						<NavLink to='/' exact={true} activeClassName='active'>
							<img src='grammygramlogo.png'></img>
						</NavLink>
					</li>
				</div>
				<div className='navbar right'>{sessionLinks}</div>
			</ul>
		</nav>
	);
};

export default NavBar;
