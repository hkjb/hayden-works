import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Routes from 'routes';

import './styles.scss';

function Header() {
  
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <header className={`app__navigation ${showMenu ? 'app__navigation--open' : ''}`}>
      <button className="app__navigation__toggle" onClick={() => setShowMenu(!showMenu)}>
        <i className={`fa fa-${showMenu ? 'times' : 'bars'}`} />
      </button>

      { Routes.pageArray.map((route, i) => {
        if (route.show !== false) {
          return route.children ? (
            <div className="app__navigation__link app__navigation__link--has-children">
              <strong>{route.header}</strong>
              { route.children.map((child, i) => child.show !== false && (
                <NavLink key={i} to={`${route.path}${child.path}`}>{child.header}</NavLink>
              ))}
            </div>
          ) : (
            <NavLink key={i} to={route.path} className="app__navigation__link">{route.header}</NavLink>
          );
        }
      })}
    </header>
  );
}

export default Header;
