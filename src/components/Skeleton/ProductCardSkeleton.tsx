import styles from "./ProductCardSkeleton.module.scss";

export default function ProductCardSkeleton() {
  return (
    <div className={styles.card}>
      <div className={styles.image} />

      <div className={styles.title} />

      <div className={styles.price} />

      <div className={styles.button} />
    </div>
  );
}
