import React from 'react';
import './Songs.css';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import SongRow from './SongRow';

function Songs({ tracksList, solid }) {
  return (
    <div className="body__songs">
      <div className="body__icons">
        <PlayCircleFilledIcon className="body__shuffle" />
        <FavoriteIcon fontSize="large" className="body__like" />
        <MoreHorizIcon className="body__more" />
      </div>
      <table>
        <tr className={`table__header ${solid && 'solid'}`}>
          <th className="table__number">#</th>
          <th className="table__title">TITLE</th>
          <th className="table__album">ALBUM</th>
          <th className="table__date">DATE ADDED</th>
          <th className="table__time">
            <QueryBuilderOutlinedIcon />
          </th>
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
