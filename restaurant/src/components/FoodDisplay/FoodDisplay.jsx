import { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((food, index) => {
          if (category === "All" || food.category === category) {
            return <FoodItem food={food} id={food._id} key={index} />;
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
