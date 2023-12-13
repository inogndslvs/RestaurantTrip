import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './views/component/hero-baner';
import './views/component/footer-section';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#drawer'),
  drawer: document.querySelector('#navlist'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
