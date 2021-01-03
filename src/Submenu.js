import React from 'react';
import './Submenu.css';

function Submenu() {
  return (
    <div className="submenu">
      <ul>
        <li className="link">Account</li>
        <li className="link">Profile</li>
        <li className="logout link">Log out</li>
      </ul>
    </div>
  );
}

export default Submenu;
