import React, { useState } from "react";
import "./App.css";
import Store from "./Store";
import { Address, Resturant } from "./model/resturant";

let data: Resturant = {
  name: "Dandy Restaurant",
  category: "western",
  address: {
    city: "Busan",
    detail: "somewhere",
    zipCode: 1234567,
  },
  menu: [{ name: "rose pasta", price: 2000, category: "PASTA" }],
};
const App: React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Resturant>(data);
  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address });
  };

  return (
    <div className="App">
      <Store info={data} changeAddress={changeAddress} />
    </div>
  );
};

export default App;
