import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Avatar } from '@material-ui/core';
import { useGlobalContext } from './StateProvider';

function Header({ solid, playlistName, showTitle }) {
  const [{ user }] = useGlobalContext();

  return (
    <div className={`header ${solid && 'solid'}`}>
      <div className="header__left">
        <div className="search__bar">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
        <div className={`title__bar ${showTitle && 'visible'}`}>
          <PlayCircleFilledIcon />
          <h2>{playlistName}</h2>
        </div>
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
