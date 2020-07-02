export default function (productsArray) {
  const sliderImages = [...document.querySelectorAll('.img__content')];
  const sliderNames = [...document.querySelectorAll('.img__name')];
  const sliderPrices = [...document.querySelectorAll('.img__price')];

  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].src = `http://${productsArray[i].imageUrl}`;
    sliderNames[i].textContent = `${productsArray[i].name}`;
    sliderPrices[i].textContent = `${productsArray[i].price}`;
  }
}