import "./Home.css";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import { useContext } from "react";
import { UserDataContext } from "../../context/UserData";
import { Data } from "../../Data/Data";

const Home = () => {
  const { specificItem } = useContext(UserDataContext);
  let requiredData = specificItem.length ? specificItem : Data;
  return (
    <div>
      <Header />
      <div className="item-card--container">
        {requiredData.map((item) => (
          <Card
            image={item.image}
            name={item.name}
            brand={item.brand}
            rating={item.rating}
            identifier={item.identifier}
            actualPrice={item.actualPrice}
            offerPrice={item.offerPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
