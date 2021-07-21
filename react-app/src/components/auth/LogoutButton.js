import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <img onClick={onLogout}
              className='navbar-logout nav1'
							src='logout.svg'
							alt='Explore'
							height="20"
    					width="20"
						></img>;
};

export default LogoutButton;
