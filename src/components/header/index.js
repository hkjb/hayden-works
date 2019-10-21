import React from 'react';
import { NavLink } from 'react-router-dom';
import Routes from 'routes';

import './styles.scss';

function Header() {

  const links = Routes.pageArray.map((route, i) => (
    <NavLink key={i} to={route.path} className="app__header__link">{route.header}</NavLink>
  ));

  const icons = ['rabbit-fast', 'computer-classic', 'mountain'];
  const icon = icons[Math.floor(Math.random() * icons.length)];
  
  return (
    <header className="app__header">
      <NavLink to="/" className="app__header__home">
        <i className={`fa fa-${icon}`} />
      </NavLink>
      {links}
    </header>
  );
}

export default Header;
