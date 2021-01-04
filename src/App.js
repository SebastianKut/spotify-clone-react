import { React, useEffect, useCallback } from 'react';
import './App.css';
import Login from './Login';
import Player from './Player';
import { getTokenFromUrl } from './spotify';
import { useGlobalContext } from './StateProvider';
import { spotifyApi } from './spotify';

function App() {
  const { token, playlist_id, dispatch } = useGlobalContext();

  const getTokenAndFetchInitialData = useCallback(() => {
    const _token = getTokenFromUrl().access_token;

    window.location.hash = '';

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        payload: _token,
      });

      spotifyApi.setAccessToken(_token);

      spotifyApi
        .getMe()
        .then((_user) => {
          dispatch({
            type: 'SET_USER',
            payload: _user,
          });
        })
        .catch((error) => console.log(error.message));

      spotifyApi
        .getUserPlaylists()
        .then((playlists) => {
          dispatch({
            type: 'SET_PLAYLISTS',
            payload: playlists,
          });
        })
        .catch((error) => console.log(error.message));

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
        .catch((error) => console.log(error.message));

      spotifyApi
        .getMyCurrentPlaybackState()
        .then((res) => {
          dispatch({
            type: 'SET_CURRENT_SONG',
            payload: res.item,
          });

          dispatch({
            type: 'SET_PLAYING_STATUS',
            payload: res.is_playing,
          });

          dispatch({
            type: 'SET_SHUFFLE_STATUS',
            payload: res.shuffle_state,
          });

          dispatch({
            type: 'SET_REPEAT_STATUS',
            payload:
              res.repeat_state === 'context' || res.repeat_state === 'track'
                ? true
                : false,
          });
        })
        .catch((error) => console.log(error.message));
    }
  }, [dispatch, playlist_id]);

  useEffect(() => {
    getTokenAndFetchInitialData();
  }, [getTokenAndFetchInitialData]);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
