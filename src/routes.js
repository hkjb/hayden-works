import HomePage from 'pages/home.md';

import BestOf2018 from 'pages/2018.md';
import BestOf2019 from 'pages/2019.md';

const pageObject = { 
  Home: {
    path: '/',
    header: 'hello',
    content: HomePage,
  },
  BestOf2018: {
    path: '/2018',
    header: '2018',
    content: BestOf2018,
  },
};

const pageArray = Object.values(pageObject);

export default {
  pageArray,
  pageObject,
};
