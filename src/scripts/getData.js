const url =
  'https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=48&store=US';

const getData = () => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'asos2.p.rapidapi.com',
        'x-rapidapi-key': '76343e9babmsh83316836b7d44fap1ce83ejsn9106d24b61a1',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const products = [];
        data.products.forEach((element) => {
          products.push({
            name: element.name,
            imageUrl: element.imageUrl,
            price: element.price.current.text,
          });
        });
        resolve(products);
      })
      .catch((reason) => {
        reject(reason);
      });
  });
};

export default getData;
