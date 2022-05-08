import React from 'react';
import { NavLink } from 'react-router-dom';
import Routes from 'routes';

import './styles.scss';

function Header() {

  return (
    <header className="app__navigation">
      {Routes.pageArray.map((route, i) => route.children ? (
        <div key={i} className="app__navigation__link app__navigation__link--has-children">
          <i className={`fa fa-${route.icon}`} />
          { route.children.map((child, i) => child.show !== false && (
            <NavLink key={i} to={`${route.path}${child.path}`}>{child.header}</NavLink>
          ))}
        </div>
      ) : (
        <NavLink key={i} to={route.path} className={`app__navigation__link${route.show === false ? ' u-hidden' : ''}`}>
          <i className={`fa fa-${route.icon}`} />
        </NavLink>
      ))}

      <div className="app__navigation__social">
        <a className="app__navigation__link" href="https://github.com/hkjb" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github" />
        </a>
        <a className="app__navigation__link" href="https://twitter.com/teevee_boy" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-twitter" />
        </a>
        <a className="app__navigation__link" href="https://stackoverflow.com/users/4953804" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-stack-overflow" />
        </a>
      </div>
    </header>
  );
}

export default Header;
