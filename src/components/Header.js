import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
      <nav className='navbar'>
        <Link to='/' style={{textDecoration: 'none', color: '#ffffff'}}>
          <div className='logo'>
            <FontAwesomeIcon icon={faClapperboard} />
            <h1 className='navbar-title'>Movie Catalog</h1>
          </div>
        </Link>
      </nav>
    );
}