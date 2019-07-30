import React from 'react';
import Footer from 'components/footer';

import 'styles/styles.scss';

import 'App.scss';

function App() {

  return (
    <div className="app">
      <header className="app__header">
        <a href="/">
          <span className="icon">
            <i className="fa fa-rabbit-fast" />
          </span>
          hello
        </a>
      </header>
      <main className="app__content">
        I'm Hayden, a web developer from Idaho living in Philadelphia
      </main>
      <Footer />
    </div>
  );
}

export default App;
