import React, { useState } from 'react';
import './SongRow.css';
import prettyMilliseconds from 'pretty-ms';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function SongRow({ track, number }) {
  const [isVisible, setIsVisible] = useState(false);
  const { added_at } = track;
  const { artists, name, album, duration_ms } = track.track;

  const newData = {
    image: album.images[0].url,
    trackName: name,
    artistsName: artists.map((artist) => artist.name).join(','),
    albumName: album.name,
    duration: prettyMilliseconds(duration_ms, { colonNotation: true }).split(
      '.'
    )[0],
    dateAdded: added_at.substring(0, 10),
  };

  const {
    image,
    trackName,
    artistsName,
    albumName,
    duration,
    dateAdded,
  } = newData;

  return (
    <tr
      className="tableRow"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className="table__data filler"></div>
      <td className="table__data number rounded_left">
        {isVisible ? <PlayArrowIcon className="playIcon" /> : <p>{number}</p>}
      </td>
      <td className="songRow highlight">
        <img src={image} alt="" className="songRow__album" />
        <div className="songRow__info">
          <h2>{trackName}</h2>
          <p>{artistsName}</p>
        </div>
      </td>
      <td className="table__data">
        <p>{albumName}</p>
      </td>
      <td className="table__data table__date">
        <p>{dateAdded}</p>
      </td>
      <td className="table__data rounded_right">
        <span>
          <FavoriteBorderOutlinedIcon
            className={`heartIcon ${isVisible && 'show'}`}
          />
          <RemoveCircleOutlineOutlinedIcon
            className={`removeIcon ${isVisible && 'show'}`}
          />
          <p>{duration}</p>
          <MoreHorizIcon className={`moreIcon ${isVisible && 'show'}`} />
        </span>
      </td>
      <div className="table__data filler"></div>
    </tr>
  );
}

export default SongRow;
