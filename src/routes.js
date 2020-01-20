import HomePage from 'pages/home.md';

import Best2019 from 'pages/2019.md';
import Best2018 from 'pages/2018.md';

const pageObject = { 
  Home: {
    path: '/',
    header: 'home',
    content: HomePage,
  },
  Contact: {
    path: '/contact',
    header: 'contact',
    content: 'Reach me at: --- --- ----',
    show: false,
  },
  BestOf: {
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
