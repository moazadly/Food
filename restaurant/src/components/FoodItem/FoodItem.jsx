import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
function FoodItem({ food, id }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div key={id} className="food-item">
      <div className="food-item-img-container">
        <img src={food.image} alt={food.name} className="food-item-image" />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            alt=""
            className="add"
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt=""
              onClick={() => removeFromCart(id)}
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              alt=""
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{food.name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{food.description}</p>
        <p className="food-item-price">${food.price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
