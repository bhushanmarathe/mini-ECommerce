import type { ApiProduct, Product, Variant } from "../types/product";

const brands = ["Nike", "Adidas", "Puma", "Levi's", "H&M", "Zara", "Uniqlo"];

const colors = [
  { name: "Black", code: "#111827" },
  { name: "White", code: "#F9FAFB" },
  { name: "Blue", code: "#2563EB" },
];

const sizes = ["S", "M", "L", "XL"] as const;

function createVariants(): Variant[] {
  return colors.flatMap((color) =>
    sizes.map((size) => ({
      id: `${color.name.toLowerCase()}-${size.toLowerCase()}`,
      color: color.name,
      colorCode: color.code,
      size,
      stock: Math.floor(Math.random() * 8),
    })),
  );
}

export function mapProduct(apiProduct: ApiProduct): Product {
  return {
    ...apiProduct,

    brand: brands[apiProduct.id % brands.length],

    originalPrice: Number((apiProduct.price * 1.25).toFixed(2)),

    images: [
      { id: 1, url: apiProduct.image },
      { id: 2, url: apiProduct.image },
      { id: 3, url: apiProduct.image },
    ],

    variants: createVariants(),
  };
}
