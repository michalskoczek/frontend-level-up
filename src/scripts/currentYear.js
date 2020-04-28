export default function () {
  const dataCopyright = document.querySelector('.footer__year');
  const currentYear = new Date().getFullYear();
  dataCopyright.textContent = `${currentYear}`;
}
