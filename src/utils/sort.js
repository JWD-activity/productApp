export const sortProducts = (userInput, products) => {
  switch (userInput) {
    case 'a-z':
      return products.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      );

    case 'z-a':
      return products.sort((a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
      );

    case '9-0':
      return products.sort((a, b) => Number(b.price) - Number(a.price));

    case '0-9':
      return products.sort((a, b) => Number(a.price) - Number(b.price));

    default:
      return products;
  }
};

export const searchProducts = (userInput, param, data) => {
  return data.filter((product) => {
    return param.some((newProduct) => {
      return (
        product[newProduct]
          .toString()
          .toLowerCase()
          .indexOf(userInput.toLowerCase()) > -1
      );
    });
  });
};
