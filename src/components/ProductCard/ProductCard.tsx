import { Link } from "react-router-dom";
//import toast from "react-hot-toast";

import type { Product } from "../../types/product";
//import { useCart } from "../../context/CartContext";

import styles from "./ProductCard.module.scss";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  //   const { addToCart } = useCart();

  //   const defaultVariant = product.variants[0];

  //   function handleQuickAdd() {
  //     addToCart({
  //       productId: product.id,
  //       variantId: defaultVariant.id,
  //       title: product.title,
  //       image: product.images[0].url,
  //       price: product.price,
  //       color: defaultVariant.color,
  //       size: defaultVariant.size,
  //       quantity: 1,
  //     });

  //     toast.success("Added to cart");
  //   }

  return (
    <div className={styles.card}>
      <Link to={`/product/${product.id}`}>
        <img
          src={product.images[0].url}
          alt={product.title}
          className={styles.image}
        />

        <h2 className={styles.title}>{product.title}</h2>
      </Link>

      <p className={styles.price}>${product.price.toFixed(2)}</p>

      <button
        type="button"
        className={styles.button}
        aria-label={`Quick add ${product.title}`}
      >
        Quick Add
      </button>
    </div>
  );
}
