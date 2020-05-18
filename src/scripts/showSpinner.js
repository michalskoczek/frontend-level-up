const showLoading = (spinner, products, specialOfferts) => {
  products.style.visibility = 'hidden';
  specialOfferts.style.visibility = 'hidden';
  spinner.classList.add('spinner--visible');
};

export default showLoading;
