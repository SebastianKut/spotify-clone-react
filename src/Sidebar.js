import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import StarsIcon from '@material-ui/icons/Stars';
import { useGlobalContext } from './StateProvider';

function Sidebar() {
  const { playlists } = useGlobalContext();
  console.log(playlists);
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeOutlinedIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicOutlinedIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLIST</strong>
      <br />
      <SidebarOption Icon={AddCircleIcon} title="Create Playlist" />
      <SidebarOption Icon={StarsIcon} title="Liked Songs" />
      <hr />
      <div className="sidebar__playlists">
        {playlists &&
          playlists.map((item) => {
            const { name, id } = item;
            return <SidebarOption key={id} title={name} />;
          })}
      </div>
    </div>
  );
}

export default Sidebar;
