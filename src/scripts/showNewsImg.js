export default function (productsArray) {
  const newsContainers = [...document.querySelectorAll('.news-container')];
  const images = [];

  for (let i = 0; i < newsContainers.length; i++) {
    images.push(document.createElement('img'));
    images[i].src = `http://${productsArray[i].imageUrl}`;
  }

  for (let i = 0; i < productsArray.length; i++) {
    newsContainers[i].appendChild(images[i]);
  }
}
