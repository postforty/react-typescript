// let data = {
//     name: "Dandy restaurant",
//     category: "western",
//     address: {
//       city: "Busan",
//       detail: "somewhere",
//       zipCode: 1234567,
//     },
//     menu: [{ name: "rose pasta", price: 2000, category: "PASTA" }],
//   };

export type Resturant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

export type Address = {
  city: string;
  detail: string;
  zipCode: Number;
};

export type Menu = {
  name: string;
  price: number;
  category: string;
};

// 22분 부터
