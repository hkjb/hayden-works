import React from 'react';
import { NavLink } from 'react-router-dom';
import Routes from 'routes';

import './styles.scss';

function Header() {

  const icons = ['computer-classic'];
  const icon = icons[Math.floor(Math.random() * icons.length)];
  
  return (
    <header className="app__header">
      <NavLink to="/" className="app__header__home">
        <i className={`fa fa-${icon}`} />
      </NavLink>
      
      { Routes.pageArray.map((route, i) => route.children ? (
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
  );
}

export default Header;
