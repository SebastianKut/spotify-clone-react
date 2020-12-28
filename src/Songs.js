import React from 'react';
import './Songs.css';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

function Songs({ tracksList }) {
  return (
    <div className="body__songs">
      <div className="body__icons">
        <PlayCircleFilledIcon className="body__shuffle" />
        <FavoriteIcon fontSize="large" className="body__like" />
        <MoreHorizIcon />
      </div>
      {tracksList &&
        tracksList.map((track) => {
          return <SongRow track={track} />;
        })}
    </div>
  );
}

export default Songs;
