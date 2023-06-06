import React from "react";
import { Address, Resturant } from "./model/resturant";

interface OwnProps {
  info: Resturant;
  changeAddress(address: Address): void;
}

const Store: React.FC<OwnProps> = ({ info }) => {
  return <div>{info.name}</div>;
};

export default Store;
