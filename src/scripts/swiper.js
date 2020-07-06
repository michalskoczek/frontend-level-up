import Swiper from 'swiper';
//import 'swiper/swiper-bundle.css';
import leftArrowBtn from '../assets/left-arrow.png';
import rightArrowBtn from '../assets/right-arrow.png';

export default function (productsArray) {
  const leftBtn = document.querySelector('.swiper-button-prev');
  const rightBtn = document.querySelector('.swiper-button-next');
  const leftArrowImg = document.createElement('img');
  leftArrowImg.src = `${leftArrowBtn}`;
  const rightArrowImg = document.createElement('img');
  rightArrowImg.src = `${rightArrowBtn}`;
  leftBtn.appendChild(leftArrowImg);
  rightBtn.appendChild(rightArrowImg);

  const swiperWrapper = document.querySelector('.swiper-wrapper');
  console.log(swiperWrapper);

  productsArray.forEach(product => {
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');

    let imgContent = document.createElement('img');
    imgContent.classList.add('swiper-slide__img');
    imgContent.src = `http://${product.imageUrl}`;

    let spanName = document.createElement('span');
    spanName.classList.add('swiper-slide__name');
    spanName.textContent = `${product.name}`;

    let spanPrice = document.createElement('span');
    spanPrice.classList.add('swiper-slide__price');
    spanPrice.textContent = `${product.price}`;

    swiperSlide.appendChild(imgContent);
    swiperSlide.appendChild(spanName);
    swiperSlide.appendChild(spanPrice);
    swiperWrapper.appendChild(swiperSlide);
  })


  const swiper = new Swiper('.swiper-container', {
    // direction: 'vertical',
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}