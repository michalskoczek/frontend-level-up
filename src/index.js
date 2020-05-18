import './sass/style.scss';
import allProducts from './scripts/allProducts';
import getCurrentYear from './scripts/currentYear';
import scrollToTop from './scripts/scrollToTop';
import getData from './scripts/getData';
import showError from './scripts/error';
import addImage from './scripts/showProducts';
import showLoading from './scripts/showSpinner';
import hideLoading from './scripts/hideSpinner';
import showNewsImg from './scripts/showNewsImg';
import showSlider from './scripts/showSlider';

window.addEventListener('DOMContentLoaded', () => {
  const spinnerElement = document.querySelector('.spinner');
  const productsContainer = document.querySelector('.products');
  const specialOfferContainer = document.querySelector(
    '.special-offer-container',
  );

  showLoading(spinnerElement, productsContainer, specialOfferContainer);

  getData()
    .then((resp) => {
      showSlider(resp.slice(5, 10));
      allProducts(resp.slice(0, 8));
      addImage(resp.slice(16, 24));
      showNewsImg(resp.slice(27, 31));
    })
    .catch((err) => {
      showError();
    })
    .finally(() => {
      hideLoading(spinnerElement, productsContainer, specialOfferContainer);
    });

  getCurrentYear();
  scrollToTop();
});
