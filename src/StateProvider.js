import React, { createContext, useContext, useReducer } from 'react';

export const StateProviderContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //functions used in multiple components
  const handlePlayback = (is_playing, spotifyApi) => {
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
