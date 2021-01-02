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
  const {
    discover_weekly,
    is_playing,
    handlePlayback,
    handleNext,
    handlePrevious,
    dispatch,
  } = useGlobalContext();
  const { tracks } = discover_weekly;

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

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src={tracks && tracks[0].track.album.images[0].url}
          alt="album cover"
        />
        <div className="footer__songInfo">
          <h4>{tracks && tracks[0].track.name}</h4>
          <p>{tracks && tracks[0].track.artists[0].name}</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__icon" />
        <SkipPreviousIcon
          className="footer__icon"
          onClick={() => handlePrevious(spotifyApi)}
        />
        {is_playing ? (
          <PauseCircleOutlineIcon
            className="footer__icon play__icon"
            onClick={() => handlePlayback(is_playing, spotifyApi)}
          />
        ) : (
          <PlayCircleOutlineIcon
            className="footer__icon play__icon"
            onClick={() => handlePlayback(is_playing, spotifyApi)}
          />
        )}
        <SkipNextIcon
          className="footer__icon"
          onClick={() => handleNext(spotifyApi)}
        />
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
