
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import DemoUser from '../DemoUser';
import './Navigation.css'


const NavBar = () => {
  const user = useSelector((state) => state.session.user);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        {(user)?null: 
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>}
        {(user)?null:<li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>}
        
        {(user)?<li><LogoutButton /></li>:<li><DemoUser/></li>}
        
      </ul>
    </nav>
  );
}

export default NavBar;
