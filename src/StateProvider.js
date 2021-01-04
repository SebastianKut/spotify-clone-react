import React, { createContext, useContext, useReducer } from 'react';
import { spotifyApi } from './spotify';

export const StateProviderContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //functions used in multiple components
  const handlePlayback = (is_playing) => {
    if (is_playing) {
      spotifyApi
        .pause()
        .then(() => {
          console.log('stoped'); //dispatch should be here but play/pause requires premium account, and I still want icons to change for demo purposes
        })
        .catch((error) => console.log(error.message));
      dispatch({
        type: 'SET_PLAYING_STATUS',
        payload: false,
      });
    } else {
      spotifyApi
        .play()
        .then(() => {
          console.log('started');
        })
        .catch((error) => console.log(error.message));
      dispatch({
        type: 'SET_PLAYING_STATUS',
        payload: true,
      });
    }
  };

  const displayPlaylist = (id) => {
    dispatch({
      type: 'SET_PLAYLIST_ID',
      payload: id,
    });
  };

  return (
    <StateProviderContext.Provider
      value={{ ...state, dispatch, handlePlayback, displayPlaylist }}
    >
      {children}
    </StateProviderContext.Provider>
  );
};

export const useGlobalContext = () => useContext(StateProviderContext);
