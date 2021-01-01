import React, { useState, useEffect } from 'react';
import './Body.css';
import Header from './Header';
import Banner from './Banner';
import Songs from './Songs';
import { useGlobalContext } from './StateProvider';

function Body() {
  const [isHeaderSolid, setIsHeaderSolid] = useState(false);
  const [isTableSolid, setIsTableSolid] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [{ discover_weekly }] = useGlobalContext();

  let {
    description,
    name,
    image,
    tracks,
    followers,
    owner,
    total,
  } = discover_weekly;

  const handleScroll = () => {
    if (document.querySelector('.body').scrollTop > 160) {
      setIsHeaderSolid(true);
    } else {
      setIsHeaderSolid(false);
    }

    if (document.querySelector('.body').scrollTop > 350) {
      setShowTitle(true);
    } else {
      setShowTitle(false);
    }

    if (
      document.querySelector('.table__header').getBoundingClientRect().top <= 67
    ) {
      setIsTableSolid(true);
    } else {
      setIsTableSolid(false);
    }
  };

  useEffect(() => {
    document.querySelector('.body').addEventListener('scroll', handleScroll);
    return () => {
      document
        .querySelector('.body')
        .removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="body">
      <Header solid={isHeaderSolid} playlistName={name} showTitle={showTitle} />
      <Banner
        description={description}
        name={name}
        image={image}
        followers={followers}
        owner={owner}
        total={total}
      />
      <Songs tracksList={tracks} solid={isTableSolid} />
    </div>
  );
}

export default Body;
