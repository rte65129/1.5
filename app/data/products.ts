export interface Product {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
}

export const products: Product[] = [
  {
    id: 1,
    image: "",
    title: "тарелка глубокая",
    description: "тарелка диаметром 30 см с высокими бортиками",
    price: 2500
  },
  {
    id: 2,
    image: "",
    title: "тарелка плоская",
    description: "обеденная тарелка диаметром 25 см для вторых блюд",
    price: 2000
  },
  {
    id: 3,
    image: "",
    title: "чашка керамическая",
    description: "кружка объемом 350 мл с удобной эргономичной ручкой",
    price: 1200
  },
  {
    id: 4,
    image: "",
    title: "пиала малая",
    description: "небольшая порционная пиала емкостью 200 мл для соусов и закусок",
    price: 950
  }
];