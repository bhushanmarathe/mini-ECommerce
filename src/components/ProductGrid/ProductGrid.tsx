import type { Product } from "../../types/product";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductGrid.module.scss";

interface Props {
  products: Product[];
}

export default function ProductGrid({ products }: Props) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
