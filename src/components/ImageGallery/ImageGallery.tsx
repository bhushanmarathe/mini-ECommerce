import { useState } from "react";
import type { ProductImage } from "../../types/product";
import styles from "./ImageGallery.module.scss";

interface Props {
  images: ProductImage[];
}

export default function ImageGallery({ images }: Props) {
  const [selectedImage, setSelectedImage] = useState(images[0].url);

  return (
    <div className={styles.gallery}>
      <img
        src={selectedImage}
        alt="Selected product"
        className={styles.mainImage}
      />

      <div className={styles.thumbnails}>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt="Product thumbnail"
            className={`${styles.thumbnail} ${
              selectedImage === image.url ? styles.active : ""
            }`}
            onClick={() => setSelectedImage(image.url)}
          />
        ))}
      </div>
    </div>
  );
}
