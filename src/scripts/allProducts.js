export default function (productsArray) {
  const productsContainer = document.querySelector('.products-container');
  const btnAdd = document.querySelector('.products__btn-all-products');

  btnAdd.addEventListener('click', (e) => {
    e.preventDefault();

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
                  <img src="./assets/kz-bolt-line.png" alt="" />
                </span>
                NEW
              </p>
              <p class="product-cart__name">${productsArray[i].name}</p>
              <p class="product-cart__price">${productsArray[i].price}</p>
              <button class="product-cart__btn">
                <span>Select option</span>
                <img src="./assets/kz-heart.png" alt="" />
              </button>
            </div>`;

      productsContainer.appendChild(productCart);
    }

    btnAdd.style.display = 'none';
  });
}
