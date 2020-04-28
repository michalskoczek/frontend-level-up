const database = [
  {
    id: 1,
    img: '',
    specialOffer: {
      name: 'new',
      picture: './assets/kz-bolt-line.png',
    },
    name: 'Azure Tote',
    price: '$300.00',
  },

  {
    id: 2,
    img: '',
    specialOffer: {
      name: 'new',
      picture: './assets/kz-bolt-line.png',
    },
    name: 'Shirt in organic cotton',
    price: '$30.00',
  },

  {
    id: 3,
    img: '',
    specialOffer: {
      name: 'new',
      picture: './assets/kz-bolt-line.png',
    },
    name: 'Cardigan',
    price: '$280.00',
  },

  {
    id: 4,
    img: '',
    specialOffer: {
      name: 'new',
      picture: './assets/kz-bolt-line.png',
    },
    name: 'T-shirt',
    price: '$3.00',
  },
];

export default function () {
  const productsContainer = document.querySelector('.products-container');
  const btnAdd = document.querySelector('.products__btn-all-products');

  btnAdd.addEventListener('click', (e) => {
    e.preventDefault();

    for (let i = 0; i < database.length; i++) {
      const productCart = document.createElement('div');
      productCart.classList.add('col-6');
      productCart.classList.add('col-lg-4');
      productCart.classList.add('col-xl-3');

      productCart.innerHTML = `<div class="product-cart products__product-cart">
              <div class="product-cart__img"></div>
              <p class="product-cart__special-offer">
                <span>
                  <img src="./assets/kz-bolt-line.png" alt="" />
                </span>
                ${database[i].specialOffer.name}
              </p>
              <p class="product-cart__name">${database[i].name}</p>
              <p class="product-cart__price">${database[i].price}</p>
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
