import { React, useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import Player from './Player';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  const getToken = () => {
    const _token = getTokenFromUrl().access_token;
    window.location.hash = '';
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log('user', user);
      });
    }
  };

  useEffect(() => {
    getToken();
  }, [token]);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
