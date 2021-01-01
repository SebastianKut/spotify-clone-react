import { React, useEffect } from 'react';
import './App.css';
import Login from './Login';
import Player from './Player';
import { getTokenFromUrl } from './spotify';
import { useGlobalContext } from './StateProvider';
import { spotifyApi } from './spotify';

function App() {
  const [{ token }, dispatch] = useGlobalContext();

  const getToken = () => {
    const _token = getTokenFromUrl().access_token;

    window.location.hash = '';

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        payload: _token,
      });

      spotifyApi.setAccessToken(_token);

      spotifyApi.getMe().then((_user) => {
        dispatch({
          type: 'SET_USER',
          payload: _user,
        });
      });

      spotifyApi.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          payload: playlists,
        });
      });

      spotifyApi.getPlaylist('37i9dQZEVXcX651NVljfsf').then((playlist) => {
        console.log('discover weekly', playlist);
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
          type: 'SET_DISCOVER_WEEKLY',
          payload: newPlaylist,
        });
      });
    }
  };

  useEffect(() => {
    getToken();
  });

  console.log(spotifyApi);

  return (
    <div className="app">
      {token ? <Player spotifyApi={spotifyApi} /> : <Login />}
    </div>
  );
}

export default App;
