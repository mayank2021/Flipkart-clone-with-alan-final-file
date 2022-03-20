import React, { createContext } from "react";
import { Data } from "../Data/Data";
import wordsToNumbers from "words-to-numbers";
export const UserDataContext = createContext();

const UserDataContextProvider = (props) => {
  const CartItem = [];

  const addItemInCart = (item) => {
    let itemNumber = wordsToNumbers(item);
    Data.map((ele) => {
      let eleNumber = parseInt(ele.identifier);
      let itemNumber1 = parseInt(itemNumber);
      console.log("helo2", eleNumber);
      console.log("hel3", itemNumber1);
      if (eleNumber === itemNumber1) {
        CartItem.push(ele);
      }
    });
  };

  let specificItem = [];

  const filterItem = (item) => {
    Data.map((ele) => {
      let eleName = ele.name.toLowerCase();
      let itemName = item.toLowerCase();
      if (eleName === itemName) {
        specificItem.push(ele);
      }
    });
  };

  return (
    <div>
      <UserDataContext.Provider
        value={{ CartItem, addItemInCart, filterItem, specificItem }}
      >
        {props.children}
      </UserDataContext.Provider>
    </div>
  );
};

export default UserDataContextProvider;
