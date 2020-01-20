import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Routes from 'routes';

import Header from 'components/header';
import Footer from 'components/footer';
import Markdown from 'components/markdown';

import 'styles/styles.scss';

import 'App.scss';

function App() {

  const colors = ['dark', 'blue', 'navy', 'maroon', 'orange'];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <BrowserRouter>
      <div id="#app" className={`app ${color}`}>
        <Header />

        <div className="app__container">
          <Switch>
            <main className="app__content">
              { Routes.pageArray.map((route, i) => route.children ?
                route.children.map((child, i) => (
                  <Route exact key={i} path={`${route.path}${child.path}`} component={() => <Markdown title={child.header} src={child.content} />} />
                )) : (
                  <Route exact key={i} path={route.path} component={() => <Markdown title={route.header} src={route.content} />} />
                )
              )}
            </main>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
