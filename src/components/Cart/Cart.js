import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => state.cart.items);
  
  const cartItemsContent = cartItems.length > 0 ? cartItems.map((cartItem) => (
    <CartItem
      key={cartItem.id}
      item={{
        id: cartItem.id,
        title: cartItem.title,
        quantity: cartItem.quantity,
        total: totalAmount,
        price: cartItem.price,
      }}
    />
  )) : <p>Cart is empty!</p>;

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItemsContent}</ul>
      <hr />
      <div className={classes.total}>
        <span>Total:</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
    </Card>
  );
};

export default Cart;
