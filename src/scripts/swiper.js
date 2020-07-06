import leftArrowBtn from '../assets/left-arrow.png';
import rightArrowBtn from '../assets/right-arrow.png';

export default function (productsArray) {
  const btnArrow = [...document.querySelectorAll('.slider__arrow')];
  const leftArrowImg = document.createElement('img');
  leftArrowImg.src = `${leftArrowBtn}`;
  const rightArrowImg = document.createElement('img');
  rightArrowImg.src = `${rightArrowBtn}`;
  btnArrow[0].appendChild(leftArrowImg);
  btnArrow[1].appendChild(rightArrowImg);

  const imagesRow = document.querySelector('.images__row');

  productsArray.forEach(product => {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img');
    let imgContent = document.createElement('img');
    imgContent.classList.add('img__content');
    imgContent.src = `http://${product.imageUrl}`;
    let spanName = document.createElement('span');
    spanName.classList.add('img__name');
    spanName.textContent = `${product.name}`;
    let spanPrice = document.createElement('span');
    spanPrice.classList.add('img__price');
    spanPrice.textContent = `${product.price}`;

    imgContainer.appendChild(imgContent);
    imgContainer.appendChild(spanName);
    imgContainer.appendChild(spanPrice);
    imagesRow.appendChild(imgContainer);
  })
}