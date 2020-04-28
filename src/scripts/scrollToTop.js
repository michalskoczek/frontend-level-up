export default function () {
  const arrowBtn = document.querySelector('.arrow-to-top');

  document.addEventListener('scroll', () => {
    if (window.scrollY >= screen.availHeight / 2) {
      arrowBtn.style.display = 'block';
    } else {
      arrowBtn.style.display = 'none';
    }
  });

  arrowBtn.addEventListener('click', (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}
