export async function fetchProducts() {
  return [
    {
      id: 1337,
      title: "Gretas Fury",
      price: 999,
      specialEdition: true,
      shortDesc: "Unisex",
      longDesc: "Skate ipsum dolor sit amet...",
      imgFile: "tom-morbey-QJz32ZuCArg-unsplash.jpg",
    },
  ];
}

export const CATEGORIES = [
  {
    name: "Skate",
    url: "skate",
    isOpen: false,
    subCategories: [
      {
        url: "boards",
        name: "Boards",
      },
      {
        url: "wheels",
        name: "Wheels",
      },
    ],
  },
  {
    name: "Apparel",
    url: "apparel",
    isOpen: false,
    subCategories: [
      {
        url: "hoodies",
        name: "Hoodies",
      },
      {
        url: "t-shirt",
        name: "T-shirts",
      },
      {
        url: "socks",
        name: "Socks",
      },
      {
        url: "bags",
        name: "Bags",
      },
      {
        url: "headwear",
        name: "Headwear",
      },
    ],
  },
];
