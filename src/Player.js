import React from 'react';
import './Player.css';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
import { useGlobalContext } from './StateProvider';

function Player({ spotifyApi }) {
  const { submenu_show, dispatch } = useGlobalContext();
  const handleCloseSubmenu = (e) => {
    if (submenu_show && !e.target.classList.contains('link')) {
      dispatch({
        type: 'SET_SHOW_SUBMENU',
        payload: false,
      });
    }
  };
  return (
    <div className="player" onClick={handleCloseSubmenu}>
      <div className="player__body">
        <Sidebar />
        <Body spotifyApi={spotifyApi} />
      </div>
      <Footer spotifyApi={spotifyApi} />
    </div>
  );
}

export default Player;
