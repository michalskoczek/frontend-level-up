import './styles/style.scss';
import allProducts from './scripts/allProducts';
import getCurrentYear from './scripts/currentYear';

window.addEventListener('DOMContentLoaded', (e) => {
  allProducts();
  getCurrentYear();
});
