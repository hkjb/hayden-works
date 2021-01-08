import HomePage from 'pages/home.md';

import Best2020 from 'pages/2020.md';
import Best2019 from 'pages/2019.md';
import Best2018 from 'pages/2018.md';

// Page Object Parameters
// path:      link appended to hayden.works
// header:    determines the page and nav title
// icon:      fontawesome icon for mobile display
// content:   attached markdown for display
// show:      determines visibility on all navs
// children:  only applicable for top level sections, includes additional page objects

const pageObject = { 
  Home: {
    path: '/',
    header: 'home',
    icon: 'house',
    content: HomePage,
  },
  Contact: {
    path: '/contact',
    header: 'contact',
    icon: 'phone',
    content: 'Reach me at: --- --- ----',
    show: false,
  },
  BestOf: {
    path: '/best-of',
    header: 'best of',
    icon: 'star',
    children: [
      {
        path: '/2020',
        header: '20',
        content: Best2020,
      },
      {
        path: '/2019',
        header: '19',
        content: Best2019,
      },
      {
        path: '/2018',
        header: '18',
        content: Best2018,
      },
      {
        path: '/2017',
        header: '17',
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
