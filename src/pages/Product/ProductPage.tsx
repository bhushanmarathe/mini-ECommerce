import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import ImageGallery from "../../components/ImageGallery/ImageGallery";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";
import useProduct from "../../hooks/useProduct";

import styles from "./ProductPage.module.scss";

import VariantSelector from "../../components/VariantSelector/VariantSelector";
import type { Product } from "../../types/product";

import { useCart } from "../../context/CartContext";

import toast from "react-hot-toast";

import ProductPageSkeleton from "../../components/Skeleton/ProductPageSkeleton";

export default function ProductPage() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const { product, loading } = useProduct(id!);

  const [quantity, setQuantity] = useState(1);

  const [selectedVariant, setSelectedVariant] = useState<
    Product["variants"][number] | null
  >(null);

  const { addToCart } = useCart();

  useEffect(() => {
    if (!product) return;

    const color = searchParams.get("color");
    const size = searchParams.get("size");

    const variant =
      product.variants.find((v) => v.color === color && v.size === size) ||
      product.variants[0];

    setSelectedVariant(variant);
  }, [product, searchParams]);

  if (loading) {
    return <ProductPageSkeleton />;
  }

  if (!product) {
    return <h2>Product not found.</h2>;
  }

  if (!selectedVariant) {
    return null;
  }

  const handleVariantChange = (variant: Product["variants"][number]) => {
    setSelectedVariant(variant);

    setSearchParams({
      color: variant.color,
      size: variant.size,
    });
  };

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      variantId: selectedVariant.id,
      title: product.title,
      image: product.images[0].url,
      price: product.price,
      color: selectedVariant.color,
      size: selectedVariant.size,
      quantity,
    });

    toast.success("Added to cart!");
  };

  return (
    <div className={styles.container}>
      <ImageGallery images={product.images} />

      <div className={styles.info}>
        <p className={styles.brand}>{product.brand}</p>

        <h1>{product.title}</h1>

        <div className={styles.priceContainer}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>

          <span className={styles.originalPrice}>
            ${product.originalPrice.toFixed(2)}
          </span>
        </div>

        <p className={styles.description}>{product.description}</p>

        <VariantSelector
          variants={product.variants}
          selectedVariant={selectedVariant}
          onChange={handleVariantChange}
        />

        <p
          style={{
            marginTop: "1rem",
            fontWeight: 600,
            color:
              selectedVariant.stock === 0
                ? "#dc2626"
                : selectedVariant.stock <= 3
                  ? "#d97706"
                  : "#16a34a",
          }}
        >
          {selectedVariant.stock === 0
            ? "Sold Out"
            : selectedVariant.stock <= 3
              ? `Only ${selectedVariant.stock} left`
              : "In Stock"}
        </p>

        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

        <button
          className={styles.button}
          disabled={selectedVariant.stock === 0}
          onClick={handleAddToCart}
        >
          {selectedVariant.stock === 0 ? "Sold Out" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
}
