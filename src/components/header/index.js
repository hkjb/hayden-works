import React from 'react';
import { Link } from 'react-router-dom';
import Routes from 'routes';

import './styles.scss';

function Header() {

  const links = Routes.pageArray.map((route, i) => i !== 0 && (
    <Link key={i} to={route.path}>{route.header},</Link>
  ));
  
  return (
    <header className="app__header">
      <a href="/">
        <span className="icon">
          <i className="fa fa-rabbit-fast" />
        </span>
        hello,
      </a>
      {links}
    </header>
  );
}

export default Header;
