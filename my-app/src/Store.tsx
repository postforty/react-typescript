import React from "react";
import { Address, restaurant } from "./model/restaurant";

interface OwnProps {
  info: restaurant;
  changeAddress(address: Address): void;
}

const Store: React.FC<OwnProps> = ({ info }) => {
  return <div>{info.name}</div>;
};

export default Store;
