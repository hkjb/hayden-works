import React from 'react';

import './styles.scss';

function Header() {

  return (
    <header className="app__header">
      <a href="/">
        <span className="icon">
          <i className="fa fa-rabbit-fast" />
        </span>
        hello
      </a>
    </header>
  );
}

export default Header;
