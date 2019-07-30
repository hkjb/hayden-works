import React from 'react';

import './styles.scss';

function Footer() {

  return (
    <footer className="app__footer">
      <a href="https://github.com/hkjb" target="_blank" rel="noopener noreferrer">
        <span className="icon">
          <i className="fab fa-github" />
        </span>
        <span className="is-hidden-mobile">github</span>
      </a>
      <a href="https://twitter.com/hhhkkkjjjbbb" target="_blank" rel="noopener noreferrer">
        <span className="icon">
          <i className="fab fa-twitter" />
        </span>
        <span className="is-hidden-mobile">twitter</span>
      </a>
      <a href="https://stackoverflow.com/users/4953804" target="_blank" rel="noopener noreferrer">
        <span className="icon">
          <i className="fab fa-stack-overflow" />
        </span>
        <span className="is-hidden-mobile">stack overflow</span>
      </a>
    </footer>
  );
}

export default Footer;