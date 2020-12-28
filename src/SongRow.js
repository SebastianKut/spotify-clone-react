import React from 'react';
import './SongRow.css';

function SongRow({ track }) {
  const { artists, name, album } = track.track;

  const newData = {
    image: album.images[0].url,
    trackName: name,
    artistsName: artists.map((artist) => artist.name).join(','),
    albumName: album.name,
  };

  const { image, trackName, artistsName, albumName } = newData;

  return (
    <div className="songRow">
      <img src={image} alt="" className="songRow__album" />
      <div className="songRow__info">
        <h1>{trackName}</h1>
        <p>
          {artistsName}
          {albumName}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
