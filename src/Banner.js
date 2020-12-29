import React from 'react';
import './Banner.css';

function Banner({ description, name, image, followers, owner, total }) {
  return (
    <>
      <div className="banner__info">
        <img src={image} alt="" />
        <div className="banner__infoText">
          <strong>PLAYLIST</strong>
          <h2>{name}</h2>
          <p>{description}</p>
          <p>
            <strong>{owner}</strong>
            {` • ${followers ? followers : '0'} followers • ${total} songs`}
          </p>
        </div>
      </div>
    </>
  );
}

export default Banner;
