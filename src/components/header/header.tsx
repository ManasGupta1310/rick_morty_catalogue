import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="something">
          <div>
            <img src="/Rick.png" height={100} width={100} alt="pokeball" />
          </div>
          <div>
            <h1>Rick and Morty Catalogue</h1>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Header;
