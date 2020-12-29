import React from 'react';
import './SongRow.css';
import prettyMilliseconds from 'pretty-ms';

function SongRow({ track, number }) {
  const { added_at } = track;
  const { artists, name, album, duration_ms } = track.track;
  console.log('Piosenka ', track);
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
    <tr className="tableRow">
      <td className="table__data number">
        <p>{number}</p>
      </td>
      <td className="songRow">
        <img src={image} alt="" className="songRow__album" />
        <div className="songRow__info">
          <h2>{trackName}</h2>
          <p>{artistsName}</p>
        </div>
      </td>
      <td className="table__data">
        <p>{albumName}</p>
      </td>
      <td className="table__data">
        <p>{dateAdded}</p>
      </td>
      <td className="table__data">
        <p>{duration}</p>
      </td>
    </tr>
  );
}

export default SongRow;
