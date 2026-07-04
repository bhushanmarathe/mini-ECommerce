import styles from "./ProductPageSkeleton.module.scss";

export default function ProductPageSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <div className={styles.mainImage} />

        <div className={styles.thumbnails}>
          <div className={styles.thumb} />
          <div className={styles.thumb} />
          <div className={styles.thumb} />
          <div className={styles.thumb} />
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.brand} />

        <div className={styles.title} />

        <div className={styles.price} />

        <div className={styles.description} />
        <div className={styles.description} />
        <div className={styles.descriptionShort} />

        <div className={styles.selector} />

        <div className={styles.selector} />

        <div className={styles.button} />
      </div>
    </div>
  );
}
