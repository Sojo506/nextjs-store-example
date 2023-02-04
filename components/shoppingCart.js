import { useAppContext } from "./stateWrapper";
import Product from "../components/product";
import styles from "../styles/shoppingCart.module.css";

export default function ShoppingCart() {
  const cart = useAppContext();

  function handleCloseCart() {
    cart.closeCart();
  }

  function getTotal() {
    const total = cart.items.reduce(
      (acc, item) => acc + item.qty * item.price,
      0
    );
    return total
  }

  return (
    <div
      className={styles.shoppingCart}
      style={{ display: cart.isOpen ? "block" : "none" }}
    >
      <button onClick={handleCloseCart} className={styles.close}>
        Close
      </button>

      {cart.items.length === 0 ? (
        <div className={styles.empty}>Cart is Empty</div>
      ) : (
        <>
          <h3>Your Items</h3>
          <div>
            {cart.items.map((i) => (
              <Product key={i.id} item={i} showAs="ListItem" qty={i.qty} />
            ))}
          </div>
          <div className={styles.total}>Total: ${getTotal()}</div>
        </>
      )}
    </div>
  );
}
