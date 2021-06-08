import trafficImage from "assets/traffic.jpg";

const products = [
  {
    id: 1,
    title: "1ª Habilitação Carro e Moto",
    slung: "primeira-habilitacao-carro-moto",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: trafficImage,
  },
  {
    id: 2,
    title: "1ª Habilitação Carro",
    slung: "primeira-habilitacao-carro",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: trafficImage,
  },
  {
    id: 3,
    title: "1ª Habilitação Moto",
    slung: "primeira-habilitacao-moto",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: trafficImage,
  },
  {
    id: 4,
    title: "Mudança de Categoria Caminhão",
    slung: "mudanca-categoria-caminhao",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: trafficImage,
  },
  {
    id: 5,
    title: "Aulas Avulsas",
    slung: "aulas-avulsas",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: trafficImage,
  },
];

export const useProducts = () => {
  return products;
};

export const useProduct = ({ slung }) => {
  return products.find((p) => p.slung == slung);
};
