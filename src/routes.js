import HomePage from 'pages/home.md';
import AboutPage from 'pages/about.md';

const Home = {
  path: '/',
  header: 'hello',
  content: HomePage,
};

const About = {
  path: '/about',
  header: 'about',
  content: AboutPage,  
};

const pageArray = [Home, About];
const pageObject = {Home, About};

export default {
  pageArray,
  pageObject,
};
