import { useContext } from "react";
import "./cart.css";
import { StoreContext } from "../../context/StoreContext";
function Cart() {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getCartTotalAmount,
    getNumberOfProducts,
  } = useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((food) => {
          if (cartItems[food._id]) {
            return (
              <div key={food._id}>
                <div className="cart-items-title cart-items-item">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="cart-item-image"
                  />
                  <p>{food.name}</p>
                  <p>${food.price}</p>
                  <p>{cartItems[food._id]}</p>
                  <p>${food.price * cartItems[food._id]}</p>
                  <p className="cross" onClick={() => removeFromCart(food._id)}>
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      {getNumberOfProducts() > 0 ? (
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getCartTotalAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>$5</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getCartTotalAmount() + 5}</b>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>Enter a promo code</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder="promo code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Cart;
