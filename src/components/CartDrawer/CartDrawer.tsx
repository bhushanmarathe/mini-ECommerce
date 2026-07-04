import { useCart } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import styles from "./CartDrawer.module.scss";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: Props) {
  const { cart, totalPrice } = useCart();

  return (
    <>
      {open && <div className={styles.overlay} onClick={onClose} />}

      <aside className={`${styles.drawer} ${open ? styles.open : ""}`}>
        <div className={styles.header}>
          <h2>Shopping Cart</h2>

          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        <div className={styles.body}>
          {cart.length === 0 ? (
            <div className={styles.empty}>
              <div className={styles.emptyIcon}>🛒</div>

              <h3>Your cart is empty</h3>

              <p>Looks like you haven't added anything yet.</p>
            </div>
          ) : (
            cart.map((item) => (
              <CartItem
                key={`${item.productId}-${item.variantId}`}
                item={item}
              />
            ))
          )}
        </div>

        <div className={styles.footer}>
          <div className={styles.row}>
            <span>Subtotal</span>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>

          <div className={styles.row}>
            <span>Shipping</span>
            <strong>Free</strong>
          </div>

          <hr />

          <hr className={styles.divider} />

          <div className={styles.total}>
            <span>Grand Total</span>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>

          <button className={styles.checkout} disabled={cart.length === 0}>
            Checkout
          </button>
        </div>
      </aside>
    </>
  );
}
