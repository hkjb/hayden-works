import React from 'react';

import 'styles/styles.scss';

function App() {

  const getContent = () => {
    const content = [{ text: 'Hello' }, { text: 'Hello' }, { text: 'Hello' }, { text: 'Hello' }, { text: 'Hello' }, { text: 'Hello' }, { text: 'Hello' }, { text: 'Hello' }, { text: 'Hello' }, { text: 'Hello' }, { text: 'Hello' }, { text: 'Hello' }];

    return content.map(item => (
      <div className="box">
        { item.text }
      </div>
    ))
  }

  return (
    <div className="app">
      <header className="app__header">
        <a href="/">
          hayden.works
          <span className="icon">
            <i className="fa fa-cog" />
          </span>
        </a>
      </header>
      <main className="app__content">
        {getContent()}        
      </main>
      <footer className="app__footer">
        <a href="https://github.com/hkjb" target="_blank" rel="noopener noreferrer">
          <span className="icon">
            <i className="fab fa-github" />
          </span>
          github
        </a>
        <a href="https://twitter.com/hhhkkkjjjbbb" target="_blank" rel="noopener noreferrer">
          <span className="icon">
            <i className="fab fa-twitter" />
          </span>
          twitter
        </a>
        <a href="https://stackoverflow.com/users/4953804" target="_blank" rel="noopener noreferrer">
          <span className="icon">
            <i className="fab fa-stack-overflow" />
          </span>
          stack overflow
        </a>
      </footer>
    </div>
  );
}

export default App;
