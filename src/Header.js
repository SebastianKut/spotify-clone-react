import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Avatar } from '@material-ui/core';
import { useGlobalContext } from './StateProvider';

function Header({ solid, playlistName, showTitle }) {
  const {
    user,
    is_playing,
    handlePlayback,
    dispatch,
    submenu_show,
  } = useGlobalContext();

  const handleShowSubmenu = () => {
    dispatch({
      type: 'SET_SHOW_SUBMENU',
      payload: !submenu_show,
    });
  };

  return (
    <div className={`header ${solid && 'solid'}`}>
      <div className="header__left">
        <div className="search__bar">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
        <div className={`title__bar ${showTitle && 'visible'}`}>
          {is_playing ? (
            <PauseCircleFilledIcon onClick={() => handlePlayback(is_playing)} />
          ) : (
            <PlayCircleFilledIcon onClick={() => handlePlayback(is_playing)} />
          )}
          <h2>{playlistName}</h2>
        </div>
      </div>
      <div className="header__right" onClick={handleShowSubmenu}>
        <Avatar
          src={user && user.images[0]?.url}
          alt={user && user.display_name}
        />
        <h5>{user && user.display_name}</h5>
        <ArrowDropDownIcon />
      </div>
    </div>
  );
}

export default Header;
