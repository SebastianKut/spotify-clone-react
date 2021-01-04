import React, { useEffect } from 'react';
import './Player.css';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
import { useGlobalContext } from './StateProvider';
import { spotifyApi } from './spotify';

function Player() {
  const { submenu_show, dispatch, playlist_id } = useGlobalContext();

  const handleCloseSubmenu = (e) => {
    if (submenu_show && !e.target.classList.contains('link')) {
      dispatch({
        type: 'SET_SHOW_SUBMENU',
        payload: false,
      });
    }
  };

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlist_id)
      .then((playlist) => {
        const {
          description,
          name,
          images,
          tracks,
          followers,
          owner,
        } = playlist;
        const newPlaylist = {
          description: description,
          name: name,
          image: images[0].url,
          tracks: tracks.items,
          followers: followers.total,
          owner: owner.display_name,
          total: tracks.total,
        };
        dispatch({
          type: 'SET_CURRENT_PLAYLIST',
          payload: newPlaylist,
        });
      })
      .catch((error) => console.log(error));
  }, [playlist_id, dispatch]);

  return (
    <div className="player" onClick={handleCloseSubmenu}>
      <div className="player__body">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
