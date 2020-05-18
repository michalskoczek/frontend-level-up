export default function (productsArray) {
  const imgContainers = [...document.querySelectorAll('.product-cart__img')];
  const productsName = [...document.querySelectorAll('.product-cart__name')];
  const productsPrice = [...document.querySelectorAll('.product-cart__price')];

  let imgTags = [];
  for (let i = 0; i < imgContainers.length; i++) {
    imgTags.push(document.createElement('img'));
    imgTags[i].src = `http://${productsArray[i].imageUrl}`;
  }

  for (let i = 0; i < productsArray.length; i++) {
    imgContainers[i].appendChild(imgTags[i]);

    productsName[i].textContent = `${productsArray[i].name}`;
    productsPrice[i].textContent = `${productsArray[i].price}`;
  }
}
