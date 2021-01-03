import React from 'react';
import './SidebarOption.css';
import { utilities } from './utilities';
import { useGlobalContext } from './StateProvider';

function SidebarOption({ title, Icon, playlistId }) {
  const { displayPlaylist } = useGlobalContext();
  const { truncate } = utilities;
  return (
    <div className={Icon ? 'sidebarOption' : 'sidebarOption playlistElement'}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h4>{title}</h4>
      ) : (
        <p onClick={() => displayPlaylist(playlistId)}>{truncate(title, 30)}</p>
      )}
    </div>
  );
}

export default SidebarOption;
