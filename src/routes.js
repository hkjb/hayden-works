const Home = {
  path: '/',
  header: 'hello',
  content: '/pages/home.md',
};

const About = {
  path: '/',
  header: 'about',
  content: '/pages/about.md',  
};

const pageArray = [Home, About];
const pageObject = {Home, About};

export default {
  pageArray,
  pageObject,
};
