import './styles/style.scss';
import allProducts from './scripts/allProducts';
import getCurrentYear from './scripts/currentYear';
import scrollToTop from './scripts/scrollToTop';

window.addEventListener('DOMContentLoaded', (e) => {
  allProducts();
  getCurrentYear();
  scrollToTop();
});
