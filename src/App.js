import { useState, useEffect, useContext } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import Home from "./Pages/Home/Home";
import { Route, Switch } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import { UserDataContext } from "./context/UserData";
import { useHistory } from "react-router-dom";

function App() {
  const { addItemInCart, filterItem } = useContext(UserDataContext);
  const [item, setItem] = useState("");
  const history = useHistory();
  let x = 0;
  const scroll = (x) => {
    if (x < 0) {
      x = 0;
    }
    window.scrollTo(0, x);
  };

  useEffect(() => {
    alanBtn({
      key: "",
      onCommand: ({ command, itemNumber, requiredItem }) => {
        if (command === "addItemInCart") {
          addItemInCart(itemNumber);
        }
        if (command === "showItem") {
          filterItem(requiredItem);
          setItem(requiredItem);
        }
        if (command === "scrollDown") {
          x = x + 300;
          scroll(x);
        }
        if (command === "scrollUp") {
          x = x - 300;
          scroll(x);
        }
        if (command === "gotocart") {
          history.push("/cart");
        }
        if (command === "goback") {
          history.push("/");
        }
        if (command === "buy") {
          alert("Your order is placed successfully.");
        }
      },
    });
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </>
  );
}

export default App;
