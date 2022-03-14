import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
      <nav className='navbar'>
          <div className='logo'>
                <FontAwesomeIcon icon={faClapperboard} />
                <h1 className='navbar-title'>Movie Catalog</h1>
          </div>
      </nav>
    );
}