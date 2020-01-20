import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Routes from 'routes';

import './styles.scss';

function Header() {
  
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <>
      <div className={`app__drawer ${showMenu ? 'app__drawer--open' : 'app__drawer--closed'}`}>
        <button className="app__drawer__link" onClick={() => setShowMenu(!showMenu)}>
          <i className="fa fa-times" />
        </button>

        { Routes.pageArray.map((route, i) => route.show !== false && (
          <NavLink key={i} to={route.path} className="app__drawer__link">{route.header}</NavLink>
        ))}
      </div>
      <header className="app__header">
        <button className="app__header__home" onClick={() => setShowMenu(!showMenu)}>
          <i className="fa fa-bars" />
        </button>

        { Routes.pageArray.map((route, i) => route.highlight === true && route.children ? (
            <React.Fragment key={i}>
              <NavLink to={route.path} className="app__header__link">{route.header}</NavLink>
              <div className="app__header__children">
                { route.children.map((child, i) => child.show !== false && (
                  <NavLink key={i} to={`${route.path}${child.path}`} className="app__header__link">{child.header}</NavLink>
                ))}
              </div>
            </React.Fragment>
          ) : route.show !== false && (
            <NavLink key={i} to={route.path} className="app__header__link">{route.header}</NavLink>
          )
        )}
      </header>
    </>
  );
}

export default Header;
