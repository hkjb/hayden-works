import HomePage from 'pages/home.md';

const pageObject = { 
  Home: {
    path: '/',
    header: 'hello',
    content: HomePage,
  }
};

const pageArray = Object.values(pageObject);

export default {
  pageArray,
  pageObject,
};