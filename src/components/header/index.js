import React from 'react';
import { Link } from 'react-router-dom';
import Routes from 'routes';

import './styles.scss';

function Header() {

  const links = Routes.pageArray.map((route, i) => i !== 0 && (
    <Link key={i} to={route.path} className="mr-2">{route.header},</Link>
  ));
  
  return (
    <header className="app__header">
      <Link to="/" className="mr-2">
        <span className="icon">
          <i className="fa fa-rabbit-fast" />
        </span>
      </Link>
      {links}
    </header>
  );
}

export default Header;
