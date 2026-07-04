import { useState } from "react";
import { Link } from "react-router-dom";

import CartDrawer from "../CartDrawer/CartDrawer";
import { useCart } from "../../context/CartContext";

import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { totalItems } = useCart();

  return (
    <>
      <header className={styles.navbar}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>🛍️</span>
          ShopEase
        </Link>

        <button
          className={styles.cart}
          onClick={() => setOpen(true)}
          aria-label="Open shopping cart"
        >
          🛒
          {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
        </button>
      </header>

      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
