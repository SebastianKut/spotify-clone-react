import React from 'react';
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
import { spotifyApi } from './spotify';

function Footer() {
  const {
    current_playlist,
    is_playing,
    dispatch,
    handlePlayback,
    current_song,
    shuffle,
    repeat,
  } = useGlobalContext();
  const { tracks } = current_playlist;

  const handleNext = () => {
    // spotifyApi.skipToNext(); //premium account required
    spotifyApi.getMyCurrentPlayingTrack().then((res) => {
      // console.log('currentplayingtrack', res);
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

  const handleShuffle = () => {
    dispatch({
      type: 'SET_SHUFFLE_STATUS',
      payload: !shuffle,
    });
  };

  const handleRepeat = () => {
    dispatch({
      type: 'SET_REPEAT_STATUS',
      payload: !repeat,
    });
  };

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src={
            current_song
              ? current_song.album.images[0].url
              : tracks && tracks[0].track.album.images[0].url
          }
          alt="album cover"
        />
        <div className="footer__songInfo">
          <h4>
            {current_song ? current_song.name : tracks && tracks[0].track.name}
          </h4>
          <p>
            {current_song
              ? current_song.artists[0].name
              : tracks && tracks[0].track.artists[0].name}
          </p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon
          className={`footer__icon ${shuffle && 'active'}`}
          onClick={handleShuffle}
        />
        <SkipPreviousIcon
          className="footer__icon"
          onClick={() => handlePrevious()}
        />
        {is_playing ? (
          <PauseCircleOutlineIcon
            className="footer__icon play__icon"
            onClick={() => handlePlayback(is_playing)}
          />
        ) : (
          <PlayCircleOutlineIcon
            className="footer__icon play__icon"
            onClick={() => handlePlayback(is_playing)}
          />
        )}
        <SkipNextIcon className="footer__icon" onClick={() => handleNext()} />
        <RepeatIcon
          className={`footer__icon ${repeat && 'active'}`}
          onClick={handleRepeat}
        />
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
              defaultValue={70}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Footer;
