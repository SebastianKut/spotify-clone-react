import React, { createContext, useContext, useReducer } from 'react';

export const StateProviderContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  const handleNext = (spotifyApi) => {
    // spotifyApi.skipToNext(); //premium account required
    spotifyApi.getMyCurrentPlayingTrack().then((res) => {
      dispatch({
        type: 'SET_CURRENT_SONG',
        payload: res.item,
      });
      dispatch({
        type: 'SET_PLAYING_STATUS',
        payload: true,
      });
    });
  };

  const handlePrevious = (spotifyApi) => {
    // spotifyApi.skipToPrevious(); //premium account required
    spotifyApi.getMyCurrentPlayingTrack().then((res) => {
      dispatch({
        type: 'SET_CURRENT_SONG',
        payload: res.item,
      });
      dispatch({
        type: 'SET_PLAYING_STATUS',
        payload: true,
      });
    });
  };

  return (
    <StateProviderContext.Provider
      value={{ ...state, dispatch, handlePlayback, handlePrevious, handleNext }}
    >
      {children}
    </StateProviderContext.Provider>
  );
};

export const useGlobalContext = () => useContext(StateProviderContext);
