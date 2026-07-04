import { useCart } from "../../context/CartContext";
import type { CartItem as Item } from "../../types/product";

import styles from "./CartItem.module.scss";

import toast from "react-hot-toast";

interface Props {
  item: Item;
}

export default function CartItem({ item }: Props) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className={styles.item}>
      <img src={item.image} alt={item.title} />

      <div className={styles.info}>
        <h4>{item.title}</h4>

        <p>
          {item.color} • {item.size}
        </p>

        <div className={styles.priceSection}>
          <strong>${item.price.toFixed(2)}</strong>

          <span>${(item.price * item.quantity).toFixed(2)}</span>
        </div>

        <div className={styles.actions}>
          <button
            aria-label="Decrease quantity"
            onClick={() => decreaseQuantity(item.productId, item.variantId)}
          >
            −
          </button>

          <span>{item.quantity}</span>

          <button
            aria-label="Increase quantity"
            onClick={() => increaseQuantity(item.productId, item.variantId)}
          >
            +
          </button>
        </div>

        <button
          aria-label="Remove item"
          className={styles.remove}
          onClick={() => {
            removeFromCart(item.productId, item.variantId);

            toast.success("Item removed");
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
