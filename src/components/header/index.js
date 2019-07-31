import React from 'react';
import Routes from 'routes';

import './styles.scss';

function Header() {

  const links = Routes.pageArray.map((route, i) => (
    <Link key={i} to={route.path} />
  ));
  
  return (
    <header className="app__header">
      <a href="/">
        <span className="icon">
          <i className="fa fa-rabbit-fast" />
        </span>
        hello
      </a>
      {links}
    </header>
  );
}

export default Header;
