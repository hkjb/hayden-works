import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from 'routes';

import Header from 'components/header';
import Footer from 'components/footer';
import MarkdownReader from 'components/markdownReader';

import 'styles/styles.scss';
import 'App.scss';

function App() {
  
  const pages = Routes.pageArray.map((route, i) => (
    <Route key={i} path={route.path} component={() => <MarkdownReader src={route.content} />} />
  ));

  return (
    <Router>
      <div className="app">
        <Header />
        <main className="app__content">
          {pages}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
