import getCurrentYear from './currentYear';
import scrollToTop from './scrollToTop';
import getData from './getData';
import showError from './error';
import addImage from './showProducts';
import showLoading from './showSpinner';
import hideLoading from './hideSpinner';
import showNewsImg from './showNewsImg';
import showSlider from './showSlider';
import getAllProducts from './allProducts';

const spinnerElement = document.querySelector('.spinner');
const productsContainer = document.querySelector('.products');
const specialOfferContainer = document.querySelector(
  '.special-offer-container',
);

export default function () {
  showLoading(spinnerElement, productsContainer, specialOfferContainer);

  getData()
    .then((resp) => {
      showSlider(resp.slice(5, 10));
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

  getAllProducts();
}