import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="header">
      <div>
        <img src="/Rick.png" height={100} width={100} alt="pokeball" />
      </div>
      <div>
        <h1>Rick and Morty Catalogue</h1>
      </div>
    </div>
  );
}

export default Header;
