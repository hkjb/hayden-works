import React from 'react';
import { Link } from 'react-router-dom';
import Routes from 'routes';

import './styles.scss';

function Header() {

  const links = Routes.pageArray.map((route, i) => (
    <Link key={i} to={route.path} className="app__header__link">{route.header}</Link>
  ));
  
  return (
    <header className="app__header">
      <Link to="/" className="app__header__home">
        <span className="icon">
          <i className="fa fa-rabbit-fast" />
        </span>
      </Link>
      {links}
    </header>
  );
}

export default Header;
