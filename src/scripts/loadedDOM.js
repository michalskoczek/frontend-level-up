import getCurrentYear from './currentYear';
import scrollToTop from './scrollToTop';
import getData from './getData';
import showError from './error';
import addImage from './showProducts';
import showLoading from './showSpinner';
import hideLoading from './hideSpinner';
import showNewsImg from './showNewsImg';
import getAllProducts from './allProducts';
import slider from './swiper';

const spinnerElement = document.querySelector('.spinner');
const productsContainer = document.querySelector('.products');
const specialOfferContainer = document.querySelector(
  '.special-offer-container',
);

export default function () {

  showLoading(spinnerElement, productsContainer, specialOfferContainer);

  getData()
    .then((resp) => {
      slider(resp.slice(5, 15));
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