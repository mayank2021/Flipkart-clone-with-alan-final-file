import React, { useContext } from "react";
import "./Cart.css";
import Header from "../../components/Header/Header";
import { UserDataContext } from "../../context/UserData";
import Card from "../../components/Card/Card";

const Cart = () => {
  const { CartItem } = useContext(UserDataContext);

  return (
    <div>
      <Header />
      {CartItem && CartItem.length ? (
        <>
          <div className="item-card--container">
            {CartItem.map((item) => (
              <Card
                image={item.image}
                name={item.name}
                rating={item.rating}
                actualPrice={item.actualPrice}
                offerPrice={item.offerPrice}
                brand={item.brand}
                identifier={item.identifier}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="cart-item--container">
          <h1>Add something in your cart.</h1>
          <button
            className="cart-button"
            onClick={() => (window.location.pathname = "/")}
          >
            Explore now
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
