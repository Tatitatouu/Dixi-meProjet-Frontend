import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import './navigation.css'

const Navigation = () => {
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="/path/to/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to="/profile" className="main-nav-item">
          <FontAwesomeIcon icon={faUserCircle} />
          Tony
        </Link>
        <Link to="/" className="main-nav-item">
          <FontAwesomeIcon icon={faSignOutAlt} />
          Sign Out
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;