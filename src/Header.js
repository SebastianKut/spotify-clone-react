import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Avatar } from '@material-ui/core';
import { useGlobalContext } from './StateProvider';

function Header({ solid }) {
  const [{ user }] = useGlobalContext();

  return (
    <div className={`header ${solid && 'solid'}`}>
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </div>
      <div className="header__right">
        <Avatar
          src={user && user.images[0].url}
          alt={user && user.display_name}
        />
        <h5>{user && user.display_name}</h5>
        <ArrowDropDownIcon />
      </div>
    </div>
  );
}

export default Header;
