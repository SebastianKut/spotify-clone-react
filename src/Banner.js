import React from 'react';
import './Banner.css';

function Banner({ description, name, image }) {
  return (
    <>
      <div className="banner__info">
        <img src={image} alt="" />
        <div className="banner__infoText">
          <strong>PLAYLIST</strong>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export default Banner;
