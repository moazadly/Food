import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const addToCart = (itemId) => {
    if (cartItems[itemId]) {
      setCartItems({ ...cartItems, [itemId]: cartItems[itemId] + 1 });
    } else {
      setCartItems({ ...cartItems, [itemId]: 1 });
    }
  };
  const removeFromCart = (itemId) => {
    if (cartItems[itemId] > 1) {
      setCartItems({ ...cartItems, [itemId]: cartItems[itemId] - 1 });
    } else {
      const { [itemId]: _, ...rest } = cartItems;
      setCartItems(rest);
    }
  };
  const getNumberOfProducts = () => {
    let totalItems = 0;
    for (let item in cartItems) {
      totalItems += cartItems[item];
    }
    return totalItems;
  };
  const getCartTotalAmount = () => {
    let totalAmount = 0;
    for (let item in cartItems) {
      totalAmount +=
        food_list.find((food) => food._id === item).price * cartItems[item];
    }
    return totalAmount;
  };
  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getNumberOfProducts,
    getCartTotalAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
