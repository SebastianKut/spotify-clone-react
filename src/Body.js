import React from 'react';
import './Body.css';
import Header from './Header';
import Banner from './Banner';
import Songs from './Songs';
import { useGlobalContext } from './StateProvider';

function Body() {
  const [{ discover_weekly }] = useGlobalContext();
  console.log(discover_weekly);
  let { description, name, image, tracks } = discover_weekly;
  return (
    <div className="body">
      <Header />
      <Banner description={description} name={name} image={image} />
      <Songs tracksList={tracks} />
    </div>
  );
}

export default Body;
