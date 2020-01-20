import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Routes from 'routes';

import './styles.scss';

function Header() {
  
  const [showMenu, setShowMenu] = useState(true);
  
  return (
    <header className={`app__navigation ${showMenu ? 'app__navigation--open' : ''}`}>
      <button className="app__navigation__toggle" onClick={() => setShowMenu(!showMenu)}>
        <i className={`fa fa-${showMenu ? 'bars' : 'times'}`} />
      </button>

      { Routes.pageArray.map((route, i) => route.show !== false && (
        <NavLink key={i} to={route.path} className="app__navigation__link">{route.header}</NavLink>
      ))}
    </header>
  );
}

export default Header;
