import React, { useState } from "react";
import "./App.css";
import Store from "./Store";
import { Address, restaurant } from "./model/restaurant";
import BestMenu from "./BestMenu";

let data: restaurant = {
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
  const [myRestaurant, setMyRestaurant] = useState<restaurant>(data);
  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address });
  };
  const showBestMenuName = (name: string) => {
    return name;
  };
  return (
    <div className="App">
      <Store info={data} changeAddress={changeAddress} />
      <BestMenu
        name="pizza"
        category="pizza"
        showBestMenuName={showBestMenuName}
      />
    </div>
  );
};

export default App;
