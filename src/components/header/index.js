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

      <a className="app__navigation__link" href="https://github.com/hkjb" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github" />
      </a>
      <a className="app__navigation__link" href="https://twitter.com/hhhkkkjjjbbb" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter" />
      </a>
      <a className="app__navigation__link" href="https://stackoverflow.com/users/4953804" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-stack-overflow" />
      </a>
    </header>
  );
}

export default Header;
