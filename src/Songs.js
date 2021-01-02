import React from 'react';
import './Songs.css';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import SongRow from './SongRow';
import { useGlobalContext } from './StateProvider';

function Songs({ tracksList, solid, spotifyApi }) {
  const { is_playing, handlePlayback } = useGlobalContext();

  return (
    <div className="body__songs">
      <div className="body__icons">
        {is_playing ? (
          <PauseCircleFilledIcon
            className="body__shuffle"
            onClick={() => handlePlayback(is_playing, spotifyApi)}
          />
        ) : (
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={() => handlePlayback(is_playing, spotifyApi)}
          />
        )}
        <FavoriteIcon fontSize="large" className="body__like" />
        <MoreHorizIcon className="body__more" />
      </div>
      <table>
        <tr className={`table__header ${solid && 'solid'}`}>
          <th className="table__filler__left"></th>
          <th className="table__number">#</th>
          <th className="table__title">TITLE</th>
          <th className="table__album">ALBUM</th>
          <th className="table__date">DATE ADDED</th>
          <th className="table__time">
            <QueryBuilderOutlinedIcon />
          </th>
          <th className="table__filler__right"></th>
        </tr>
        {tracksList &&
          tracksList.map((track, index) => (
            <SongRow key={index} track={track} number={index + 1} />
          ))}
      </table>
    </div>
  );
}

export default Songs;
