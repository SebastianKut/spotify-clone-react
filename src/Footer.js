import React, { useEffect } from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { Grid, Slider } from '@material-ui/core';
import { useGlobalContext } from './StateProvider';

function Footer({ spotifyApi }) {
  const [
    { discover_weekly, is_playing, current_song },
    dispatch,
  ] = useGlobalContext();
  const { tracks } = discover_weekly;
  console.log('status', current_song);

  useEffect(() => {
    spotifyApi.getMyCurrentPlaybackState().then((res) => {
      console.log('current playback state', res.is_playing);

      dispatch({
        type: 'SET_CURRENT_SONG',
        payload: res.item,
      });

      dispatch({
        type: 'SET_PLAYING_STATUS',
        payload: res.is_playing,
      });
    });
  }, [spotifyApi, dispatch]);

  const handlePlayback = () => {
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

  const handleNext = () => {
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

  const handlePrevious = () => {
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
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src={current_song && current_song.album.images[0].url}
          alt="album cover"
        />
        <div className="footer__songInfo">
          <h4>{current_song && current_song.name}</h4>
          <p>{current_song && current_song.artists[0].name}</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__icon" />
        <SkipPreviousIcon className="footer__icon" onClick={handlePrevious} />
        {is_playing ? (
          <PauseCircleOutlineIcon
            className="footer__icon play__icon"
            onClick={handlePlayback}
          />
        ) : (
          <PlayCircleOutlineIcon
            className="footer__icon play__icon"
            onClick={handlePlayback}
          />
        )}
        <SkipNextIcon className="footer__icon" onClick={handleNext} />
        <RepeatIcon className="footer__icon" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider
              aria-labelledby="continuous-slider"
              className="volume__control"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Footer;
