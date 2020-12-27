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
    }
  };

  useEffect(() => {
    getToken();
  });

  console.log(spotifyApi);

  return (
    <div className="app">
      {token ? <Player spotify={spotifyApi} /> : <Login />}
    </div>
  );
}

export default App;
