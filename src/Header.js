import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Avatar } from '@material-ui/core';
import { useGlobalContext } from './StateProvider';
import { SignalCellularNullOutlined } from '@material-ui/icons';

function Header({ solid, playlistName, showTitle }) {
  const [{ user, is_playing }, dispatch] = useGlobalContext();
  console.log(user);

  const handlePlayback = () => {
    if (is_playing) {
      //spotifyApi.pause(); //requires premium account
      dispatch({
        type: 'SET_PLAYING_STATUS',
        payload: false,
      });
    } else {
      //spotifyApi.play(); //requires premium account
      dispatch({
        type: 'SET_PLAYING_STATUS',
        payload: true,
      });
    }
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
            <PauseCircleFilledIcon onClick={handlePlayback} />
          ) : (
            <PlayCircleFilledIcon onClick={handlePlayback} />
          )}
          <h2>{playlistName}</h2>
        </div>
      </div>
      <div className="header__right">
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
