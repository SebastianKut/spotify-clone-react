import React, { createContext, useContext, useReducer } from 'react';
//import { spotifyApi } from './spotify';

export const StateProviderContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //functions used in multiple components
  const handlePlayback = (is_playing) => {
    if (is_playing) {
      try {
        // spotifyApi.pause(); //requires premium account
        dispatch({
          type: 'SET_PLAYING_STATUS',
          payload: false,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        // spotifyApi.play(); //requires premium account
        dispatch({
          type: 'SET_PLAYING_STATUS',
          payload: true,
        });
      } catch (error) {
        console.log(error);
      }
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
