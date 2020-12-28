import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useGlobalContext } from './StateProvider';

function Header() {
  const [{ user }] = useGlobalContext();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </div>
      <div className="header__right">
        <Avatar
          src={user && user.images[0].url}
          alt={user && user.display_name}
        />
        <h4>{user && user.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;