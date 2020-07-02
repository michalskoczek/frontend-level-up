import getData from "./getData";
import showError from './error';

const productsContainer = document.querySelector('.products-container');
const btnAdd = document.querySelector('.products__btn-all-products');

const getAllProducts = () => {
  btnAdd.addEventListener('click', e => {
    e.preventDefault();

    getData()
      .then(resp => {
        showAllProducts(resp.slice(0, 8));
      })
      .catch(() => showError())
  })
}

function showAllProducts(productsArray) {
  for (let i = 0; i < productsArray.length; i++) {
    const productCart = document.createElement('div');
    productCart.classList.add('col-6');
    productCart.classList.add('col-lg-4');
    productCart.classList.add('col-xl-3');

    productCart.innerHTML = `<div class="product-cart products__product-cart">
              <div class="product-cart__img">
              <img src="http://${productsArray[i].imageUrl}">
              </div>
              <p class="product-cart__special-offer">
                <span>
                  <img src="" alt="" />
                </span>
                NEW
              </p>
              <p class="product-cart__name">${productsArray[i].name}</p>
              <p class="product-cart__price">${productsArray[i].price}</p>
              <button class="product-cart__btn">
                <span>Select option</span>
                <img src="" alt="" />
              </button>
            </div>`;

    productsContainer.appendChild(productCart);
  }
  btnAdd.style.display = 'none';
}

export default getAllProducts;