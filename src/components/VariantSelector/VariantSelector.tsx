import type { Variant } from "../../types/product";
import styles from "./VariantSelector.module.scss";

interface Props {
  variants: Variant[];
  selectedVariant: Variant;
  onChange: (variant: Variant) => void;
}

export default function VariantSelector({
  variants,
  selectedVariant,
  onChange,
}: Props) {
  const colors = Array.from(
    new Map(variants.map((v) => [v.color, v])).values(),
  );

  const sizes = variants
    .filter((v) => v.color === selectedVariant.color)
    .map((v) => v.size);

  return (
    <>
      <div className={styles.section}>
        <h3>Color</h3>

        <div className={styles.colors}>
          {colors.map((variant) => (
            <button
              key={variant.color}
              className={`${styles.color} ${
                selectedVariant.color === variant.color ? styles.active : ""
              }`}
              style={{
                background: variant.colorCode,
              }}
              onClick={() => onChange(variant)}
            />
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3>Size</h3>

        <div className={styles.sizes}>
          {sizes.map((size) => {
            const variant = variants.find(
              (v) => v.color === selectedVariant.color && v.size === size,
            )!;

            return (
              <button
                key={size}
                className={`${styles.size} ${
                  selectedVariant.id === variant.id ? styles.activeSize : ""
                }`}
                onClick={() => onChange(variant)}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
