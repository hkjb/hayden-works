import HomePage from 'pages/home.md';

import Best2019 from 'pages/2019.md';
import Best2018 from 'pages/2018.md';

// Page Object Parameters
// highlight: determines visibility on main content nav
// path:      link appended to hayden.works
// header:    determines the page and nav title
// content:   attached markdown for display
// show:      determines visibility on all navs
// children:  only applicable for top level sections, includes additional page objects

const pageObject = { 
  Home: {
    highlight: true,
    path: '/',
    header: 'home',
    content: HomePage,
  },
  Contact: {
    highlight: true,
    path: '/contact',
    header: 'contact',
    content: 'Reach me at: --- --- ----',
    show: false,
  },
  BestOf: {
    highlight: false,
    path: '/best-of',
    header: 'best of',
    children: [
      {
        path: '/2019',
        header: '2019',
        content: Best2019,
      },
      {
        path: '/2018',
        header: '2018',
        content: Best2018,
      },
      {
        path: '/2017',
        header: '2017',
        content: 'Best of 2017',
        show: false,
      },
    ],
  },
};

const pageArray = Object.values(pageObject);

export default {
  pageArray,
  pageObject,
};
