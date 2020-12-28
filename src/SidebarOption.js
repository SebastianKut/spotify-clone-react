import React from 'react';
import './SidebarOption.css';
import { utilities } from './utilities';

function SidebarOption({ title, Icon }) {
  const { truncate } = utilities;
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{truncate(title, 30)}</p>}
    </div>
  );
}

export default SidebarOption;
