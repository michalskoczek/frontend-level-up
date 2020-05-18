const hideLoading = (spinner, products, specialOfferts) => {
  spinner.classList.remove('spinner--visible');
  products.style.visibility = 'visible';
  specialOfferts.style.visibility = 'visible';
};

export default hideLoading;
