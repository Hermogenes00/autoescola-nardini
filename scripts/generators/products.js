const faker = require("faker");

const buildProductList = (size) => {
  const result = [];

  for (let i = 0; i < size; i++) {
    result.push({
      id: i + 1,
      image: faker.image.technics(),
      title: faker.commerce.productName(),
      sumary: faker.commerce.productDescription(),
      slung: faker.lorem.slug(),
    });
  }
  return result;
};

console.log(JSON.stringify(buildProductList(100), null, "  "));
