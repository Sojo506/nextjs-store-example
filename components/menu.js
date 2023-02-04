import Link from "next/link";
import styles from "../styles/menu.module.css";
import { useAppContext } from "./stateWrapper";

export default function Menu() {
  const cart = useAppContext();

  function handleOpenCart() {
    cart.openCart();
  }

  return (
    <nav className={styles.menu}>
      <div>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/store">
          Store
        </Link>
        <Link className={styles.link} href="/faq">
          FAQ
        </Link>
      </div>
      <div>
        <a className={styles.link} href="#" onClick={handleOpenCart}>
          Cart({cart.getNumberOfItems()})
        </a>
      </div>
    </nav>
  );
}
